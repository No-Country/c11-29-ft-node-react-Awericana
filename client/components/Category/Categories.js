import Category from '.'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/categoria`
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setCategories(data.categorias))
    console.log(data)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {categories.map(category => (
        <Category key={category.id} name={category.nombre} img={category.link}/>
      ))}
    </Slider>
  )
}

export default Categories
