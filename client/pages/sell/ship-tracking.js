import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import { TrackingComponent } from '@/components/ShipingTracking/index.js'
import Head from 'next/head'
import Link from 'next/link'
// import { HiTrash } from 'react-icons/hi'

export default function Shiptracking () {
  const imgUrl = ''
  const title = 'Medias epicas'
  // const price = ''
  const estado = 'Recibido'

  return (
    <Layout>
      <Head>
        <title>Estado del envio | Awericana</title>
      </Head>
      <Header disabled={true} />
      <section className="max-w-screen-sm lg:max-w-5x2 m-auto h-fit flex ">
        <TrackingComponent estado={estado} />

        <div>
          <div className="flex px-5 py-4 mb-2 justify-stretch items-center gap-4 xl:gap-8 shadow-[1px_1px_4px_rgba(0,0,0,0.25)] h-[112px] xl:h-[160px] xl:py-6">
            <img
              className="h-[80px] w-[80px] xl:h-[112px] xl:w-[112px] bg-gray-700"
              src={imgUrl}
            />
            <div className="flex flex-col self-stretch justify-between font-light text-sm leading-5 max-[480px]:w-3/5 min-[480px]:w-2/3 min-[540px]:w-3/4 min-[768px]:w-4/5">
              <div className="text-base font-light leading-5 text-black xl:text-2xl">
                {title}
              </div>
              <div className="text-base font-light leading-5 text-black xl:text-2xl">
                {estado}
              </div>
              <div className="flex justify-around">
                {estado === 'Empacando'
                  ? (
                  <p
                    className="text-xs font-normal leading-5 text-black underline xl:text-primary xl:text-lg xl:no-underline xl:hover:underline"
                    href={'#'}
                  >
                    cancelar compra
                  </p>
                    )
                  : null}

                {estado === 'Recibido'
                  ? (
                  <Link
                    className="text-xs font-normal leading-5 text-black underline xl:text-primary xl:text-lg xl:no-underline xl:hover:underline"
                    href={'#'}
                  >
                    Calificar al vendedor
                  </Link>
                    )
                  : null}

                {estado === 'Recibido'
                  ? (
                  <p
                    className="text-xs font-normal leading-5 text-black underline xl:text-primary xl:text-lg xl:no-underline xl:hover:underline"
                    href={'#'}
                  >
                    devolver producto
                  </p>
                    )
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
