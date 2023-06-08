/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
const Index = () => {
	return (
		<Layout>
		<Head>
        <title>Reviews</title>
		</Head>
		<Header />
		<section className='max-w-screen-sm lg:max-w-5xl m-auto h-fit flex flex-col'>
			<h2 className='py-12 px-4 font-normal text-lg leading-5'>Calificar al vendedor</h2>
		</section>
		</Layout>	
	)
}

export default Index
