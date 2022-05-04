// import axios from 'axios';
// import { GetServerSideProps } from 'next';
// import { useEffect } from 'react';
// import useSWR from 'swr';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Visitors = () => {
  const pageviews = useSelector((state: RootState) => state.umami.pageviews);
  // const fetcher = async (url: string) => {
  //   return axios
  //     .get(url, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_UMAMI_TOKEN}`,
  //       },
  //     })
  //     .then((res) => res.data);
  // };
  // const { data, error } = useSWR(
  //   `https://umami.tfkhdyt.my.id/api/website/1/stats?start_at=1&end_at=${new Date().getTime()}`,
  //   fetcher
  // );
  //
  // if (error) console.log(error);

  return (
    <div className='flex items-center text-xs font-semibold text-slate-500'>
      Total Visitors:{' '}
      {pageviews ? (
        pageviews
      ) : (
        <div className='animate-pulse ml-1 w-12 h-3 rounded-sm bg-slate-500 '></div>
      )}
    </div>
  );
};

export default Visitors;
