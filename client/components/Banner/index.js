import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

/*importar las imagenes que van a ir en el Slider*/
//import imagenDelBanner1 from '@/public/assets/imagen1'
//import imagenDelBanner2 from '@/public/assets/imagen2'
//import imagenDelBanner3 from '@/public/assets/imagen3'

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <Slider {...settings} className='w-full'>
                <Image
                    src={/*acá va la imágen que importamos*/ asd}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <Image
                    src={/*acá va la imágen que importamos*/ asd}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <Image
                    src={/*acá va la imágen que importamos*/ asd}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </Slider>  
        </>
    )
}
  
export default Banner;
  