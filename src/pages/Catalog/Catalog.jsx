import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamper,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchCampervans } from '../../redux/service';
import { CampersList } from 'components/CampersList/CampersList';

const Catalog = () => {
  const dispatch = useDispatch();
  const campervans = useSelector(selectCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);
  console.log(campervans);

  return (
    <div>
      {error && (
        <p>Oops! Something went wrong! Please try reloading this page.</p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CampersList campers={campervans} />
        </>
      )}
    </div>
  );
};
export default Catalog;
