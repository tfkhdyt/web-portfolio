import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { MotionConfig } from 'framer-motion'
import { themeChange } from 'theme-change'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'

import Layout from '../components/Layout'
// import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Resume from '../components/Resume/Resume'
import Projects from '../components/Projects/Projects'
import MetaTags from '../components/MetaTags/MetaTags'
import Contact from '../components/Contact/Contact'

const Home: NextPage = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <>
      <Head>
        <MetaTags />
        <title>TAUFIK HIDAYAT - Portfolio Website</title>
        <Script
          async
          defer
          data-website-id='285223d1-eb6c-4b6e-a2a2-c0ca69ce122c'
          src='https://umami-production-4221.up.railway.app/umami.js'
        />
      </Head>
      <ToastContainer
        position='bottom-right'
        hideProgressBar={false}
        newestOnTop={false}
        transition={Slide}
        autoClose={5000}
        pauseOnFocusLoss
        theme='colored'
        pauseOnHover
        closeOnClick
        rtl={false}
        draggable
        bodyClassName='font-body font-medium'
      />
      <MotionConfig
        transition={{ duration: 1, type: 'tween', ease: 'backInOut' }}
      >
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
        </Layout>
      </MotionConfig>
    </>
  )
}

export default Home
