import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Submit } from '@/components/Buttons/Submit'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import { useError } from '@/hooks/useError'

export default function VenderCategory () {
  const [categorias, setCategorias] = useState([])
  const [productos, setProductos] = useState([])
  const [selectedCategoria, setSelectedCategoria] = useState('')
  const [gender, setGenders] = useState([])
  const { error, setError } = useError()
  const router = useRouter()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categoria`)
      .then((response) => response.json())
      .then((data) => setCategorias(data.categorias))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (selectedCategoria) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto?nombreTipoProducto=${selectedCategoria}`)
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .catch((error) => console.log(error))
    }
  }, [selectedCategoria])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/personas`)
      .then((response) => response.json())
      .then((data) => {
        setGenders(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleCategoriaChange = (event) => {
    setSelectedCategoria(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const selectedSubCategoria = event.target.elements.subCategoria.value
    const selectedGender = event.target.elements.gender.value

    const formData = JSON.parse(localStorage.getItem('formData')) || {}
    const updatedFormData = {
      ...formData,
      selectedCategoria,
      selectedSubCategoria,
      selectedGender
    }

    if (updatedFormData?.selectedCategoria && updatedFormData?.selectedGender && updatedFormData?.selectedSubCategoria) {
      localStorage.setItem('formData', JSON.stringify(updatedFormData))
      router.push('/sell/add-product/upload-image')
    } else {
      setError({ category: 'Algo salió mal, revisa las categorías e intentalo de nuevo.' })
    }
  }
  const handleCancel = () => {
    localStorage.clear()
    router.push('/')
  }
  return (
    <Layout>
      <Header disabled={true} />
      <h2 className="font-bold text-4xl mt-10 mb-10 ml-10">Vender</h2>
      <section className='flex justify-center flex-col-reverse'>
        <form className="flex justify-center items-center flex-col " onSubmit={handleFormSubmit}>
          <div className='flex gap-6 flex-col'>
            <select className='my-0.5 w-full h-12 border border-solid  text-gray-700 text-sm font-regular leading-tight border-green-700 text-black outline-none shadow-md p-3 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary-400 focus:ring-opacity-50 placeholder:text-sm placeholder:text-slate-400' value={selectedCategoria} onChange={handleCategoriaChange} name='categoria'>
              <option value="">Seleccione una categoría</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.nombre}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
            {
              <select className='my-0.5 w-full h-12 border border-solid  text-gray-700 text-sm font-regular leading-tight border-green-700 text-black outline-none shadow-md p-3 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary-400 focus:ring-opacity-50 placeholder:text-sm placeholder:text-slate-400' name='subCategoria'>
                <option value="">Seleccione una sub-categoría</option>
                {Array.isArray(productos) &&
                  productos.map((producto) => (
                    <option key={producto.id} value={producto.id}>
                      {producto.nombre}
                    </option>
                  ))}
              </select>
            }
            <select className='my-0.5 w-full h-12 border border-solid  text-gray-700 text-sm font-regular leading-tight border-green-700 text-black outline-none shadow-md p-3 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary-400 focus:ring-opacity-50 placeholder:text-sm placeholder:text-slate-400' name='gender'>
              <option value="">Seleccione un Género</option>
              {gender.length > 0 && gender.map((genders) => (
                <option key={genders.id} value={genders.nombre}>
                  {genders.nombre}
                </option>
              ))}
            </select>
            {error?.category ? <p className='text-red text-big font-extrabold text-center'>{error?.category}</p> : null}
            <Submit className="flex justify-center">Guardar Y Continuar</Submit>
          </div>
        </form>
      </section>
      <div className='flex justify-center'> <button className='border-green-700 border w-full md:w-[28rem]  relative lg:w-[28rem] lg:h-14 py-3 select-none shadow-lg rounded-xl font-md text-lg ' onClick={handleCancel}>Cancelar</button></div>
      <Footer />
    </Layout>
  )
}
