import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import Image from "next/image";
import producto from '@/public/assets/img-prod-vendedor/prod-vendedor.png';
import banner from '@/public/assets/img-banner-ficha-mobile/banner-ficha-mobile.png';
import { Secondary } from "@/components/Buttons/Secondary";
import { Submit } from "@/components/Buttons/Submit";

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const productSheet = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: 'linear'
      }

    return (
        <Layout>
            <Header/>
            <main className="p-4">
                <section id="producto">
                    <div>
                        <Slider {...settings} className='w-full overflow-hidden rounded-tr-3xl rounded-tl-3xl'>
                            <Image
                                src={banner}
                                width={379}
                                height={224}
                                alt="banner-producto"
                            />
                            <Image
                                src={banner}
                                width={379}
                                height={224}
                                alt="banner-producto"
                            />
                            <Image
                                src={banner}
                                width={379}
                                height={224}
                                alt="banner-producto"
                            />
                            <Image
                                src={banner}
                                width={379}
                                height={224}
                                alt="banner-producto"
                            />
                            <Image
                                src={banner}
                                width={379}
                                height={224}
                                alt="banner-producto"
                            />
                        </Slider>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-2/4">
                            <p className="text-2xl">Precio</p>
                            <p className="text-xl">Título</p>
                            <p className="text-xl">Talle</p>
                            <p className="text-sm">Ver tabla de talles</p>   
                        </div>
                        <div className="w-2/4 text-right">
                            <p>Agregar a favoritos</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-xl">Detalle</p>                            
                        </div>
                        <div>
                            <p className="text-xl">Vendedor</p>                     
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Submit>
                            COMPRAR
                        </Submit>
                        <Secondary>
                            Agregar al carrito
                        </Secondary>
                    </div>
                </section>
                <section id="productos-del-mismo-vendedor">
                    <div>
                        <h2 className="text-lg">
                            Más productos del mismo vendedor
                        </h2>
                    </div>
                    <div className="flex">
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                    </div>
                </section>
                <section id="preguntas-y-respuestas">

                </section>
            </main>
        </Layout>
    )
}

export default productSheet;