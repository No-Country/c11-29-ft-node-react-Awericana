<<<<<<< HEAD
"use client";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Categories from "@/components/Category/Categories";
import { useSession } from "@/hooks/useSession";
import { useState, useEffect } from "react";
export default function Home({ userData }) {
  const { session } = useSession(userData);
  console.log(session);

  useEffect(() => {
    fetch("http://localhost:3001/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject);
        dispatch(getUser(resObject.user));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
=======
import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Categories from '@/components/Category/Categories'
import { useSession } from '@/hooks/useSession'
import Link from 'next/link'

export default function Home ({ userData, publicaciones = [] }) {
  const { session } = useSession(userData)
>>>>>>> f5d65fad33732e0fba272a47c02d54478ee5d3c6

  return (
    <Layout>
      <Head>
        <title>Inicio | Awericana</title>
      </Head>
      <Header />

      <Banner />

      <div className="p-4">
        <section>
          <Categories />
        </section>
<<<<<<< HEAD
        <section className="flex flex-wrap justify-center">
          <Card precio={400} titulo={"Remera"} talleMedidas={"M"} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
=======
        <section className='flex flex-wrap justify-center'>
    {console.log(publicaciones)}
          {publicaciones.length > 0 && publicaciones.map(pub => {
            console.log(pub)
            return (
              <Link href={'/detail/:id'} as={`/detail/${pub.id}`} key={pub.id}>
                <Card
                  precio={pub.precio}
                  titulo={pub.titulo}
                  talleMedidas={pub.talle.nombre}
                  imgSrc={pub.imagenPortada || null}
                   />
              </Link>
            )
          })}

>>>>>>> f5d65fad33732e0fba272a47c02d54478ee5d3c6
        </section>
      </div>
    </Layout>
  );
}

<<<<<<< HEAD
// export async function getServerSideProps (ctx) {
//   const domain = ctx.req.headers.host
//   const response = await fetch('http://' + domain + '/api/session')
//   const userData = await response.json()

//   return {
//     props: {
//       userData: userData?.error ? null : userData.user
//     }
//   }
// }
=======
export async function getServerSideProps (ctx) {
  const userDataResponse = await fetch('http://' + ctx.req.headers.host + '/api/session')
  const userData = await userDataResponse.json()
  const publicacionesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/publicaciones?offset=0&limit=100`)
  const publicaciones = await publicacionesResponse.json()

  // const bannerResponse = await fetch(domain + '/banner')
  // const banner = await bannerResponse.json() // Las imagenes no estan cargadas

  return {
    props: {
      userData: userData?.error ? null : userData.user,
      publicaciones: publicaciones.publicaciones
    }
  }
}
>>>>>>> f5d65fad33732e0fba272a47c02d54478ee5d3c6
