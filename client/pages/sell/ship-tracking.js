import React from "react";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import Head from "next/head";

export default function Shiptracking() {
  return (
    <Layout>
      <Header disabled={true} />

      <Head>
        <title>Mis productos | Awericana</title>
      </Head>
    </Layout>
  );
}
