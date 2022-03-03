import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About/About'

const Home: NextPage = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <>
      <Head>
        <title>TFKHDYT - Web Portfolio</title>
      </Head>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  )
}

export default Home
