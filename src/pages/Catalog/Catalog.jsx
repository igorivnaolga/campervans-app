import { useCallback, useEffect, useMemo, useState } from 'react';
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
  Filters,
  List,
  LoadMoreBtn,
  MainContainer,
  SeacrhButton,
} from './Catalog.styled';
import { loadMoreCampers, resetVisibleCampers } from '../../redux/camperSlice';
import { LocationFilter } from 'components/Filters/LocationFilter/LocationFilter';
import { EquipmentFilter } from 'components/Filters/EquipmentFilter/EquipmentFilter';
import { VehicleTypeFilter } from 'components/Filters/VehicleTypeFilter/VehicleTypeFilter';

const defaultEquipment = {
  airConditioner: false,
  automaticTransmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

const defaultApplied = {
  location: '',
  equipment: { ...defaultEquipment },
  vehicleType: '',
};

function camperMatchesFilters(camper, { location, equipment, vehicleType }) {
  const loc = location.trim().toLowerCase();
  if (loc && !String(camper.location).toLowerCase().includes(loc)) {
    return false;
  }

  const d = camper.details || {};
  const ac = d.airConditioner ?? d.airconditioner ?? 0;

  if (equipment.airConditioner && ac < 1) return false;
  if (
    equipment.automaticTransmission &&
    !String(camper.transmission).toLowerCase().includes('automatic')
  ) {
    return false;
  }
  if (equipment.kitchen && (d.kitchen ?? 0) < 1) return false;
  if (equipment.TV && (d.TV ?? 0) < 1) return false;
  if (equipment.bathroom && (d.bathroom ?? 0) < 1) return false;
  if (vehicleType && camper.form !== vehicleType) return false;

  return true;
}

const Catalog = () => {
  const dispatch = useDispatch();
  const campervans = useSelector(selectCamper);
  const visibleCount = useSelector(selectVisibleCampers);
  const [locationFilter, setLocationFilter] = useState('');
  const [equipmentFilter, setEquipmentFilter] = useState({ ...defaultEquipment });
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState('');
  const [appliedFilters, setAppliedFilters] = useState(defaultApplied);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);

  const filteredCampers = useMemo(
    () => campervans.filter(c => camperMatchesFilters(c, appliedFilters)),
    [campervans, appliedFilters]
  );

  const visibleCampers = useMemo(
    () => filteredCampers.slice(0, visibleCount),
    [filteredCampers, visibleCount]
  );

  const handleLoadMoreCampers = () => {
    dispatch(loadMoreCampers());
  };

  const handleSearch = useCallback(() => {
    setAppliedFilters({
      location: locationFilter,
      equipment: { ...equipmentFilter },
      vehicleType: vehicleTypeFilter,
    });
    dispatch(resetVisibleCampers());
  }, [
    dispatch,
    locationFilter,
    equipmentFilter,
    vehicleTypeFilter,
  ]);

  const handleLocationFilterChange = newLocation => {
    setLocationFilter(newLocation);
  };
  const handleEquipmentFilterChange = newEquipment => {
    setEquipmentFilter(prevFilter => ({ ...prevFilter, ...newEquipment }));
  };
  const handleVehicleTypeFilterChange = newVehicleType => {
    setVehicleTypeFilter(newVehicleType);
  };

  const hasMore =
    filteredCampers.length > visibleCampers.length;

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
            <VehicleTypeFilter
              selectedVehicleType={vehicleTypeFilter}
              onFilterChange={handleVehicleTypeFilterChange}
            />
            <SeacrhButton type="button" onClick={handleSearch}>
              Search
            </SeacrhButton>
          </div>
          <div>
            <List>
              <CampersList campers={visibleCampers} />
              {hasMore && (
                <LoadMoreBtn type="button" onClick={handleLoadMoreCampers}>
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
