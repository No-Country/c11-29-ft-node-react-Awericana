import { getPostById } from '@/lib/getPostById'
import { Post } from '@/components/Post'
import { Layout } from '@/components/Layout'
import { Header } from '@/components/Header'
import { useEffect, useState } from 'react'

export default function Detail ({ postData }) {
  const [data, setData] = useState({})

  useEffect(() => {
    if (postData?.id) {
      console.log(data)
      setData(postData)
    }
  }, [postData])

  return (
    <Layout>
      <Header disabled={true}/>
      { data
        ? <Post title={data.titulo} price={data.precio} imageUrls={[data.imagenPortada]} detail={data.descripcion} selectedTalle={{ nombre: 'XL' }} />
        : null }
        </Layout>
  )
}

export async function getServerSideProps ({ params }) {
  const { id } = params

  const postData = await getPostById(id)

  return {
    props: {
      slug: postData
    }
  }
}
