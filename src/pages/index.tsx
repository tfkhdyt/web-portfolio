// import type { GetServerSideProps } from 'next';
import axios from 'axios';
import { MotionConfig } from 'framer-motion';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import useSWR from 'swr';
import { themeChange } from 'theme-change';

import About from '../components/About/About';
import { BackToTop } from '../components/BackToTop/BackToTop';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags/MetaTags';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Skills from '../components/Skills/Skills';
import {
  setPageViewsAllTime,
  setPageViewsLast24Hours,
  setPageViewsLast30Days,
} from '../redux/slices/umami.slice';

import 'react-toastify/dist/ReactToastify.min.css';

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
  const { data: pageviewsAllTime, error: pageviewsAllTimeError } = useSWR(
    '/api/umami/stats',
    fetcher
  );
  const { data: pageviewsLast30Days, error: pageviewsLast30DaysError } = useSWR(
    '/api/umami/stats?mode=last30Days',
    fetcher
  );
  const { data: pageviewsLast24Hours, error: pageviewsLast24HoursError } =
    useSWR('/api/umami/stats?mode=last24Hours', fetcher);
  const dispatch = useDispatch();

  if (pageviewsAllTime)
    dispatch(setPageViewsAllTime(pageviewsAllTime.pageviews.value));
  if (pageviewsLast30Days)
    dispatch(setPageViewsLast30Days(pageviewsLast30Days.pageviews.value));
  if (pageviewsLast24Hours)
    dispatch(setPageViewsLast24Hours(pageviewsLast24Hours.pageviews.value));

  useEffect(() => {
    themeChange(false);
  }, []);

  if (pageviewsAllTimeError) console.error(pageviewsAllTimeError);
  if (pageviewsLast30DaysError) console.error(pageviewsLast30DaysError);
  if (pageviewsLast24HoursError) console.error(pageviewsLast24HoursError);

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
