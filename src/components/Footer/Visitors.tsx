// import { useSelector } from 'react-redux';

import { IPageViews } from '../../redux/slices/umami.slice';
// import { RootState } from '../../redux/store';
import People from './People';
import TextWithTooltip from './TextWithTooltip';

const Visitors = ({ data }: { data: IPageViews }) => {
  // const { last24Hours, last30Days, allTime } = useSelector(
  //   (state: RootState) => state.umami.pageviews
  // );

  // if (allTime) console.log('All time:', allTime);

  return (
    <div className='flex items-center text-xs font-semibold text-slate-500'>
      <People />
      {' : '}
      {data ? (
        <span className='divide-x divide-slate-600'>
          <TextWithTooltip
            tooltipLabel='Last 24 hours'
            value={data.last24Hours}
          />
          <TextWithTooltip
            tooltipLabel='Last 30 days'
            value={data.last30Days}
          />
          <TextWithTooltip tooltipLabel='All time' value={data.allTime} />
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
