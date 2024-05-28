import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamper,
  selectError,
  selectIsLoading,
  selectVisibleCampers,
} from '../../redux/selectors';
import { fetchCampervans } from '../../redux/service';
import { CampersList } from 'components/CampersList/CampersList';
import {
  Button,
  Filters,
  List,
  LoadMoreBtn,
  MainContainer,
  SeacrhButton,
} from './Catalog.styled';
import { loadMoreCampers } from '../../redux/camperSlice';
import { LocationFilter } from 'components/Filters/LocationFilter/LocationFilter';
import { EquipmentFilter } from 'components/Filters/EquipmentFilter/EquipmentFilter';

const Catalog = () => {
  const dispatch = useDispatch();
  const campervans = useSelector(selectCamper);
  const visibleCampers = useSelector(selectVisibleCampers);
  const [locationFilter, setLocationFilter] = useState('');
  const [equipmentFilter, setEquipmentFilter] = useState({
    airConditioner: false,
    automaticTransmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);

  const handleLoadMoreCampers = () => {
    dispatch(loadMoreCampers());
  };
  const handleLocationFilterChange = newLocation => {
    setLocationFilter(newLocation);
  };
  const handleEquipmentFilterChange = newEquipment => {
    setEquipmentFilter(prevFilter => ({ ...prevFilter, ...newEquipment }));
  };

  return (
    <div>
      {error && (
        <p>Oops! Something went wrong! Please try reloading this page.</p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MainContainer>
          <div>
            <LocationFilter onFilterChange={handleLocationFilterChange} />
            <Filters>Filters</Filters>
            <EquipmentFilter onFilterChange={handleEquipmentFilterChange} />
            <SeacrhButton>Search</SeacrhButton>
          </div>
          <div>
            <List>
              <CampersList campers={campervans.slice(0, visibleCampers)} />
              {campervans.length > visibleCampers && (
                <LoadMoreBtn onClick={handleLoadMoreCampers}>
                  Load more
                </LoadMoreBtn>
              )}
            </List>
          </div>
        </MainContainer>
      )}
    </div>
  );
};
export default Catalog;
