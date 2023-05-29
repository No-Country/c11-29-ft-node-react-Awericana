import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Submit } from '@/components/Buttons/Submit'
import { useState } from 'react'
import Link from 'next/link'

export default function UploadImage () {
  const [, setSelectedImages] = useState([])
  const [uploadedImageUrls, setUploadedImageUrls] = useState([])

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

  return (
    <div>
      <Header />
      <h2 className="font-bold text-4xl mt-10 mb-10 ml-10">Sube las fotos de tu producto</h2>
      <section className='flex flex-col justify-center items-center'>
        <form className="flex justify-center items-center flex-col">
          <div>
            {uploadedImageUrls.length > 0 && (
              <div className='w-[800px] h-[400px] gap-3 flex-wrap bg-slate-100 flex '>
                {uploadedImageUrls.map((imageUrl, index) => (
                  <img className='w-[200px] h-[200px] ' key={index} src={imageUrl} alt={`Uploaded ${index + 1}`} />
                ))}
              </div>
            )}
            <input className='mt-5 ' type="file" multiple onChange={handleImageUpload} />
          </div>
        <Link href={'/Products/preview'}><Submit>Guardar</Submit></Link>
        </form>
      </section>
      <Footer />
    </div>
  )
}
