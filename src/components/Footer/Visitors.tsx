import axios from 'axios';
// import { useEffect } from 'react';
import useSWR from 'swr';

const Visitors = () => {
  const fetcher = async (url: string) => {
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_UMAMI_TOKEN}`,
        },
      })
      .then((res) => res.data);
  };
  const { data, error } = useSWR(
    `https://umami.tfkhdyt.my.id/api/website/1/stats?start_at=1&end_at=${new Date().getTime()}`,
    fetcher
  );

  if (error) console.log(error);
  if (!data) return 'Loading';

  return (
    <p className='text-xs font-semibold text-slate-600'>
      Total Visitors: {data ? data.pageviews.value : 'Loading...'}
    </p>
  );
};

export default Visitors;
