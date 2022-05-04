import type { GetServerSideProps } from 'next';
import { ToastContainer, Slide } from 'react-toastify';
import { MotionConfig } from 'framer-motion';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';
import MetaTags from '../components/MetaTags/MetaTags';
import Contact from '../components/Contact/Contact';
import { BackToTop } from '../components/BackToTop/BackToTop';
import Footer from '../components/Footer/Footer';
import { setPageViews } from '../redux/slices/umami.slice';

import 'react-toastify/dist/ReactToastify.min.css';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios.get('/api/umami/stats').catch((err) => {
    throw new Error(err.message);
  });
  return {
    props: {
      data: data.data,
    },
  };
};

interface IValue {
  value: number;
}

interface IPageViews {
  pageviews: IValue;
}

interface IVisitorsProps {
  data: IPageViews;
}

const Home = ({ data }: IVisitorsProps) => {
  const dispatch = useDispatch();

  dispatch(setPageViews(data.pageviews.value));

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

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
      <MotionConfig
        transition={{ duration: 1.5, type: 'tween', ease: 'backInOut' }}
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
        <BackToTop />
      </MotionConfig>
    </>
  );
};

export default Home;
