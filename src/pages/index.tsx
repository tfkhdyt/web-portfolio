// import type { GetServerSideProps } from 'next';
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
import useSWR from 'swr';

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await axios.get(`${BASE_URL}/api/umami/stats`).catch((err) => {
//     throw new Error(err.message);
//   });
//   return {
//     props: {
//       data: data.data,
//     },
//   };
// };
//
// interface IValue {
//   value: number;
// }
//
// interface IPageViews {
//   pageviews: IValue;
// }
//
// interface IVisitorsProps {
//   data: IPageViews;
// }

const BASE_URL = process.env.BASE_URL;

const umamiClient = axios.create({
  baseURL: BASE_URL,
});

const fetcher = async (url: string) => {
  const { data } = await umamiClient.get(url).catch((err) => {
    throw err;
  });
  if (!data) return null;
  return data;
};

const Home = () => {
  const { data, error } = useSWR('/api/umami/stats', fetcher);
  const dispatch = useDispatch();

  if (data) dispatch(setPageViews(data.pageviews.value));

  useEffect(() => {
    themeChange(false);
  }, []);

  if (error) console.error(error);

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
