import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import People from './People';
import TextWithTooltip from './TextWithTooltip';

const Visitors = () => {
  const pageviewsAllTime = useSelector(
    (state: RootState) => state.umami.pageviews.allTime
  );
  const pageviewsLast30Days = useSelector(
    (state: RootState) => state.umami.pageviews.last30Days
  );
  const pageviewsLast24Hours = useSelector(
    (state: RootState) => state.umami.pageviews.last24Hours
  );

  return (
    <div className='flex items-center text-xs font-semibold text-slate-500'>
      <People />
      {' : '}
      {pageviewsAllTime || pageviewsLast30Days || pageviewsLast24Hours ? (
        <span className='divide-x divide-slate-600'>
          <TextWithTooltip
            tooltipLabel='Last 24 hours'
            value={pageviewsLast24Hours}
          />
          <TextWithTooltip
            tooltipLabel='Last 30 days'
            value={pageviewsLast30Days}
          />
          <TextWithTooltip tooltipLabel='All time' value={pageviewsAllTime} />
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
