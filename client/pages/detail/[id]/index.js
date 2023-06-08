import { getPostById } from '@/lib/getPostById'
import { Post } from '@/components/Post'
import { Layout } from '@/components/Layout'
import { Header } from '@/components/Header'
import { useEffect, useState } from 'react'
import { ErrorLayout } from '@/components/ErrorLayout'

export default function Detail ({ postData = {} }) {
  const [data, setData] = useState({})
  const [images, setImages] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [sellerData, setSellerData] = useState({})

  useEffect(() => {
    if (postData?.id) {
      console.log(postData)
      setData(postData)
      const imagesData = postData.imagens?.filter(img => img.link.length > 2).map(img => img.link)
      setImages(imagesData)

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/usuario/${postData.usuarioId}`)
        .then(res => res.json())
        .then(setSellerData)
        .catch(console.error)
    } else if (postData === null) {
      setNotFound(true)
    }
  }, [postData])

  return (
    <Layout>
      <Header disabled={true}/>
      { data && images.length > 0

        ? <Post title={data.titulo} price={data.precio} imageUrls={images} detail={data.descripcion} selectedTalle={{ nombre: 'XL' }} sellerData={sellerData} id={data.id}/>

        : null }
      {
        notFound ? <ErrorLayout /> : null
      }
        </Layout>
  )
}

export async function getServerSideProps ({ params }) {
  const { id } = params
  try {
    const postData = await getPostById(id)
    return {
      props: {
        postData
      }
    }
  } catch (e) {
    return {
      props: {
        postData: e
      }
    }
  }
}
