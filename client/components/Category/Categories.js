import Category from "."
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Categories = () => {
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
        <>
            <Slider {...settings}>
                <Category name="Categoria"/>
                <Category name="Caballero"/>
                <Category name="Dama"/>
                <Category name="Niños"/>
                <Category name="Deportes"/>
                <Category name="Salud"/>
                <Category name="Ejemplo1"/>
                <Category name="Ejemplo2"/>
            </Slider>
        </>
    )
}

export default Categories