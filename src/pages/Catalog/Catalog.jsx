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
  ClearFiltersButton,
  EmptyState,
  FilterActions,
  Filters,
  List,
  ListToolbar,
  LoadMoreBtn,
  MainContainer,
  ResultsMeta,
  SeacrhButton,
  SortGroup,
  SortLabel,
  SortSelect,
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

function sortCampers(list, sortBy) {
  const next = [...list];
  switch (sortBy) {
    case 'price-asc':
      return next.sort((a, b) => Number(a.price) - Number(b.price));
    case 'price-desc':
      return next.sort((a, b) => Number(b.price) - Number(a.price));
    case 'rating-desc':
      return next.sort((a, b) => Number(b.rating) - Number(a.rating));
    case 'name-asc':
      return next.sort((a, b) =>
        String(a.name).localeCompare(String(b.name), undefined, {
          sensitivity: 'base',
        })
      );
    default:
      return next;
  }
}

const Catalog = () => {
  const dispatch = useDispatch();
  const campervans = useSelector(selectCamper);
  const visibleCount = useSelector(selectVisibleCampers);
  const [locationFilter, setLocationFilter] = useState('');
  const [equipmentFilter, setEquipmentFilter] = useState({ ...defaultEquipment });
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState('');
  const [appliedFilters, setAppliedFilters] = useState(defaultApplied);
  const [sortBy, setSortBy] = useState('default');
  const [filterMountKey, setFilterMountKey] = useState(0);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);

  const filteredCampers = useMemo(
    () => campervans.filter(c => camperMatchesFilters(c, appliedFilters)),
    [campervans, appliedFilters]
  );

  const sortedCampers = useMemo(
    () => sortCampers(filteredCampers, sortBy),
    [filteredCampers, sortBy]
  );

  const visibleCampers = useMemo(
    () => sortedCampers.slice(0, visibleCount),
    [sortedCampers, visibleCount]
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

  const hasMore = sortedCampers.length > visibleCampers.length;

  const handleClearFilters = useCallback(() => {
    setLocationFilter('');
    setEquipmentFilter({ ...defaultEquipment });
    setVehicleTypeFilter('');
    setAppliedFilters({ ...defaultApplied });
    setFilterMountKey(k => k + 1);
    dispatch(resetVisibleCampers());
  }, [dispatch]);

  const canClearFilters = useMemo(() => {
    if (appliedFilters.location.trim()) return true;
    if (appliedFilters.vehicleType) return true;
    if (Object.values(appliedFilters.equipment).some(Boolean)) return true;
    if (locationFilter.trim()) return true;
    if (vehicleTypeFilter) return true;
    if (Object.values(equipmentFilter).some(Boolean)) return true;
    return false;
  }, [appliedFilters, locationFilter, vehicleTypeFilter, equipmentFilter]);

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
            <LocationFilter
              key={`loc-${filterMountKey}`}
              onFilterChange={handleLocationFilterChange}
            />
            <Filters>Filters</Filters>
            <EquipmentFilter
              key={`eq-${filterMountKey}`}
              onFilterChange={handleEquipmentFilterChange}
            />
            <VehicleTypeFilter
              selectedVehicleType={vehicleTypeFilter}
              onFilterChange={handleVehicleTypeFilterChange}
            />
            <FilterActions>
              <SeacrhButton type="button" onClick={handleSearch}>
                Search
              </SeacrhButton>
              <ClearFiltersButton
                type="button"
                onClick={handleClearFilters}
                disabled={!canClearFilters}
              >
                Clear filters
              </ClearFiltersButton>
            </FilterActions>
          </div>
          <div>
            <ListToolbar>
              <SortGroup>
                <SortLabel>
                  Sort by
                  <SortSelect
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    aria-label="Sort campers"
                  >
                    <option value="default">Default order</option>
                    <option value="price-asc">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                    <option value="rating-desc">Rating: high to low</option>
                    <option value="name-asc">Name: A–Z</option>
                  </SortSelect>
                </SortLabel>
              </SortGroup>
              <ResultsMeta>
                Showing {visibleCampers.length} of {sortedCampers.length} campers
              </ResultsMeta>
            </ListToolbar>
            {sortedCampers.length === 0 ? (
              <EmptyState>
                No campers match these filters. Try a wider location or clear
                some equipment options.
              </EmptyState>
            ) : (
              <List>
                <CampersList campers={visibleCampers} />
                {hasMore && (
                  <LoadMoreBtn type="button" onClick={handleLoadMoreCampers}>
                    Load more
                  </LoadMoreBtn>
                )}
              </List>
            )}
          </div>
        </MainContainer>
      )}
    </div>
  );
};
export default Catalog;
