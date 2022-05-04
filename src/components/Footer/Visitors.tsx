// import axios from 'axios';
import { GetServerSideProps } from 'next';
// import { useEffect } from 'react';
// import useSWR from 'swr';

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch(
//     `https://umami.tfkhdyt.my.id/api/website/1/stats?start_at=1&end_at=${new Date().getTime()}`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_UMAMI_TOKEN}`,
//       },
//     }
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

interface IValue {
  value: number;
}

interface IPageViews {
  pageviews: IValue;
}

interface IVisitorsProps {
  data: IPageViews;
}

const Visitors = ({ data }: IVisitorsProps) => {
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
    <div className='flex items-center text-xs font-semibold text-slate-600'>
      Total Visitors:{' '}
      {data ? (
        data.pageviews.value
      ) : (
        <div className='animate-pulse ml-1 w-12 h-3 rounded-sm bg-slate-600 '></div>
      )}
    </div>
  );
};

export default Visitors;
