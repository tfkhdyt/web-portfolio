import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { MotionConfig } from 'framer-motion'
import { themeChange } from 'theme-change'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Head from 'next/head'

const Layout = dynamic(() => import('../components/Layout'))
// import Layout from '../components/Layout'
const Hero = dynamic(() => import('../components/Hero'))
const About = dynamic(() => import('../components/About/About'))
const Skills = dynamic(() => import('../components/Skills/Skills'))
const Resume = dynamic(() => import('../components/Resume/Resume'))
const Projects = dynamic(() => import('../components/Projects/Projects'))
const MetaTags = dynamic(() => import('../components/MetaTags/MetaTags'))
const Contact = dynamic(() => import('../components/Contact/Contact'))

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
      <MotionConfig transition={{ duration: 1 }}>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
        </Layout>
      </MotionConfig>
    </>
  )
}

export default Home
