import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_UMAMI_TOKEN}`,
    },
  });
  return data;
};

const Visitors = () => {
  const { data, error } = useSWR<{ pageviews: { value: number } }>(
    `https://umami.tfkhdyt.my.id/api/websites?start_at=1&end_at=${Date.now()}`,
    fetcher
  );

  useEffect(() => {
    if (error) console.error(error);
  }, []);
  // const totalVisitors = 1000;

  return (
    <p className='text-xs font-semibold text-slate-600'>
      Total Visitors: {data ? data.pageviews.value : 'Loading...'}
    </p>
  );
};

export default Visitors;
