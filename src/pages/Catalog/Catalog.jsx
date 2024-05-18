import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamper,
  selectError,
  selectIsLoading,
  selectVisibleCampers,
} from '../../redux/selectors';
import { fetchCampervans } from '../../redux/service';
import { CampersList } from 'components/CampersList/CampersList';
import { LoadMoreBtn } from './Catalog.styled';
import { loadMoreCampers } from '../../redux/camperSlice';

const Catalog = () => {
  const dispatch = useDispatch();
  const campervans = useSelector(selectCamper);
  const visibleCampers = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);
  console.log(campervans);

  const handleLoadMoreCampers = () => {
    dispatch(loadMoreCampers());
  };

  return (
    <div>
      {error && (
        <p>Oops! Something went wrong! Please try reloading this page.</p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CampersList campers={campervans.slice(0, visibleCampers)} />
          {campervans.length > visibleCampers && (
            <LoadMoreBtn onClick={handleLoadMoreCampers}>Load more</LoadMoreBtn>
          )}
        </>
      )}
    </div>
  );
};
export default Catalog;
