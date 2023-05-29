import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Submit } from '@/components/Buttons/Submit'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiUpload } from 'react-icons/bi'

export default function UploadImage () {
  const [, setSelectedImages] = useState([])
  const [uploadedImageUrls, setUploadedImageUrls] = useState([])
  const router = useRouter()

  const handleImageUpload = async (event) => {
    const files = event.target.files
    const uploadPromises = Array.from(files).map(async (file) => {
      const data = new FormData()
      data.append('file', file)
      data.append('upload_preset', 'oiz9dpai')

      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dmxriftxk/image/upload', {
          method: 'POST',
          body: data
        })

        if (response.ok) {
          const responseData = await response.json()
          return responseData.secure_url
        } else {
          console.error(`Image upload failed for ${file.name}`)
          return null
        }
      } catch (error) {
        console.error(`Image upload failed for ${file.name}`, error)
        return null
      }
    })

    const uploadedUrls = await Promise.all(uploadPromises)
    const filteredUrls = uploadedUrls.filter((url) => url !== null)

    setSelectedImages(Array.from(files))
    setUploadedImageUrls(filteredUrls)

    const storedFormData = localStorage.getItem('formData')
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData)
      const updatedFormData = {
        ...parsedFormData,
        imageUrls: filteredUrls
      }
      localStorage.setItem('formData', JSON.stringify(updatedFormData))
    }
  }

  const handleImageDelete = (index) => {
    event.preventDefault()
    const updatedImageUrls = [...uploadedImageUrls]
    updatedImageUrls.splice(index, 1)
    setUploadedImageUrls(updatedImageUrls)
  }

  const handleCancel = () => {
    localStorage.clear()
    router.push('/')
  }

  return (
    <div>
      <Header />
      <h2 className="font-bold text-4xl mt-10 mb-10 ml-10">Sube las fotos de tu producto</h2>
      <section className='flex flex-col justify-center items-center'>
        <form className="flex justify-center items-center flex-col">
          <div className='flex justify-center flex-col items-center'>
            {uploadedImageUrls.length > 0 && (
              <div className='w-[800px] h-[400px] gap-3 flex-wrap bg-slate-100 flex '>
                {uploadedImageUrls.map((imageUrl, index) => (
                  <div key={index} className="relative">
                    <img className='w-[120px] h-[120px]' src={imageUrl} alt={`Uploaded ${index + 1}`} />
                    <button
                      className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex justify-center items-center"
                      onClick={() => handleImageDelete(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input
              id="upload-input"
              type="file"
              multiple
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="upload-input" className="text-[200px] mt-6 cursor-pointer text-secondary">
              <BiUpload className='bg-slate-300 rounded-[100px] py-2' />
            </label>
          </div>
          <p className='mt-5 mb-5'>Suelta las imágenes aquí o selecciónalas de tu dispositivo</p>
          <Link href={'/sell/add-product/preview'}>
            <Submit>Guardar Y Continuar</Submit>
          </Link>
        </form>
      </section>

      <div className='flex justify-center'>
        <button className='border-green-700 border w-full md:w-[28rem]  relative lg:w-[28rem] lg:h-14 py-3 select-none shadow-lg rounded-xl font-md text-lg' onClick={handleCancel}>Cancelar</button>
      </div>
      <Footer />
    </div>
  )
}
