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

  return (
    <Layout>
      <Head>
        <title>Inicio</title>
      </Head>
      <Header />

      <Banner />

      <div className="p-4">
        <section>
          <Categories />
        </section>
        <section className="flex flex-wrap justify-center">
          <Card precio={400} titulo={"Remera"} talleMedidas={"M"} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </Layout>
  );
}

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
