import { themeChange } from 'theme-change'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout'))
// import Layout from '../components/Layout'
const Hero = dynamic(() => import('../components/Hero'))
const About = dynamic(() => import('../components/About/About'))
const Skills = dynamic(() => import( '../components/Skills/Skills'))
const Resume = dynamic(() => import('../components/Resume/Resume'))
const Projects = dynamic(() => import( '../components/Projects/Projects'))
const MetaTags = dynamic(() => import( '../components/MetaTags/MetaTags'))

const Home: NextPage = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <>
      <Head>
        <MetaTags />
        <title>TAUFIK HIDAYAT - Web Portfolio</title>
      </Head>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
      </Layout>
    </>
  )
}

export default Home
