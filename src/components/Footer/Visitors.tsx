import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import People from './People';

const Visitors = () => {
  const pageviewsAllTime = useSelector(
    (state: RootState) => state.umami.pageviews.allTime
  );
  const pageviewsLast30Days = useSelector(
    (state: RootState) => state.umami.pageviews.last30Days
  );

  return (
    <div className='flex items-center text-xs font-semibold text-slate-500'>
      <People />
      {' : '}
      {pageviewsAllTime || pageviewsLast30Days ? (
        <span className='space-x-1'>
          <span className='tooltip ml-1' data-tip='Last 30 days'>
            {pageviewsLast30Days.toLocaleString('id-ID')}
          </span>
          <span>/</span>
          <span className='tooltip' data-tip='All time'>
            {pageviewsAllTime.toLocaleString('id-ID')}
          </span>
        </span>
      ) : (
        // `${pageviewsLast30Days.toLocaleString(
        //   'id-ID'
        // )} / ${pageviewsAllTime.toLocaleString('id-ID')}`
        <div className='animate-pulse ml-1 w-12 h-3 rounded-sm bg-slate-500 '></div>
      )}
    </div>
  );
};

export default Visitors;
