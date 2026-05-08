import { IoGridOutline } from 'react-icons/io5';
import { TbCamper, TbCaravan, TbHome } from 'react-icons/tb';
import {
  Box,
  FilterContainer,
  Label,
  Radio,
  Text,
  Title,
} from './VehicleTypeFilter.styled';

const vehicleTypes = [
  { name: 'panelTruck', label: 'Van', Icon: TbCamper },
  { name: 'fullyIntegrated', label: 'Fully Integrated', Icon: TbCaravan },
  { name: 'alcove', label: 'Alcove', Icon: TbHome },
];

export const VehicleTypeFilter = ({
  onFilterChange,
  selectedVehicleType = '',
}) => {
  const handleVehicleTypeChange = event => {
    const { value } = event.target;
    onFilterChange(value);
  };

  return (
    <div>
      <Title>Vehicle Type</Title>
      <FilterContainer>
        <Label className={selectedVehicleType === '' ? 'activeFilter' : ''}>
          <Radio
            type="radio"
            name="vehicleType"
            value=""
            checked={selectedVehicleType === ''}
            onChange={handleVehicleTypeChange}
          />
          <Box>
            <IoGridOutline size={28} aria-hidden />
            <Text>All</Text>
          </Box>
        </Label>
        {vehicleTypes.map(type => {
          const { Icon } = type;
          return (
            <Label
              key={type.name}
              className={
                selectedVehicleType === type.name ? 'activeFilter' : ''
              }
            >
              <Radio
                type="radio"
                name="vehicleType"
                value={type.name}
                checked={selectedVehicleType === type.name}
                onChange={handleVehicleTypeChange}
              />
              <Box>
                <Icon size={28} aria-hidden />
                <Text>{type.label}</Text>
              </Box>
            </Label>
          );
        })}
      </FilterContainer>
    </div>
  );
};
