import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Visitors = () => {
  const pageviews = useSelector((state: RootState) => state.umami.pageviews);

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
