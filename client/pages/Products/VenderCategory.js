import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Submit } from '@/components/Buttons/Submit'
import { useRouter } from 'next/router'
import { Tertiary } from '@/components/Buttons/Tertiary'
export default function VenderCategory () {
  const [categorias, setCategorias] = useState([])
  const [productos, setProductos] = useState([])
  const [selectedCategoria, setSelectedCategoria] = useState('')
  const [gender, setGenders] = useState([])
  const router = useRouter()

  useEffect(() => {
    fetch('http://localhost:3001/categoria')
      .then((response) => response.json())
      .then((data) => setCategorias(data.categorias))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (selectedCategoria) {
      fetch(`http://localhost:3001/producto?nombreTipoProducto=${selectedCategoria}`)
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .catch((error) => console.log(error))
    }
  }, [selectedCategoria])

  useEffect(() => {
    fetch('http://localhost:3001/genero')
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

    localStorage.setItem('formData', JSON.stringify(updatedFormData))
    router.push('/Products/uploadImage')
  }

  return (
    <div>
      <Header />
      <h2 className="font-bold text-4xl mt-10 mb-10 ml-10">Vender</h2>
      <section>
        <form className="flex justify-center items-center flex-col" onSubmit={handleFormSubmit}>
          <div>
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
                <option value="">Seleccione una SubCategoría</option>
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
              {gender.map((genders) => (
                <option key={genders.id} value={genders.nombre}>
                  {genders.nombre}
                </option>
              ))}
            </select>

            <Submit className="flex justify-center">Guardar Y Continuar</Submit>
          </div>
        </form>
      </section>
      <Tertiary>Cancelar</Tertiary>
      <Footer />
    </div>
  )
}
