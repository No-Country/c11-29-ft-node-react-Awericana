import { Layout } from '@/components/Layout'
import Image from 'next/image'
import { Stars } from './Stars'
import { AiOutlineHeart } from 'react-icons/ai'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Mobile = ({ images, title, price, size, detail, calificacion, nombre, apellido }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    cssEase: 'linear'
  }

  return (
        <Layout>
            <article className="p-4">
                <section id="producto">
                    <div>
                        <Slider {...settings} className='w-full overflow-hidden rounded-tr-3xl rounded-tl-3xl'>
                            {images.map((src, i) => {
                              return (
                                <Image
                                  key={src + i}
                                  src={src}
                                  width={379}
                                  height={224}
                                  className='h-full'
                                  alt="Imagen del producto"
                                />
                              )
                            })}
                        </Slider>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div>
                            <p className="text-3xl font-bold">$ {price}</p>
                            <p className="text-2xl">{title}</p>
                            <p className="text-xl">{size.nombre}</p>
                            <p className="text-small underline">Ver tabla de talles</p>
                        </div>
                        <span className='flex justify-center mr-10 mt-1 gap-2 h-fit items-center'>
                          <AiOutlineHeart size={20} />
                          <p className='w-2/4 text-right inline-block text-primary whitespace-nowrap font-normal text-normal underline'>Agregar a favoritos</p>
                        </span>
                    </div>
                    <div className='mt-4'>
                        <p className="text-xl mb-4 font-thin">{detail}</p>
                        <div className='flex justify-between font-thin'>
                            <p className="text-xl">{`${nombre} ${apellido}`}</p>
                            <Stars rating={calificacion} />
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
  )
}
