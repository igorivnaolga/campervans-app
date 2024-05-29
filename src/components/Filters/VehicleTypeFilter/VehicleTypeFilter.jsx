import { FaRegStar } from 'react-icons/fa';
import {
  Box,
  FilterContainer,
  Icon,
  Label,
  Radio,
  Text,
  Title,
} from './VehicleTypeFilter.styled';
import { TbCamper } from 'react-icons/tb';

const vehicleTypes = [
  { name: 'panelTruck', label: 'Van', icon: 'van' },
  { name: 'fullyIntegrated', label: 'Fully Integrated', icon: 'fully' },
  { name: 'alcove', label: 'Alcove', icon: 'alcove' },
];

export const VehicleTypeFilter = ({ onFilterChange, selectedVehicleType }) => {
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
            {/* <FaRegStar size="24px" /> */}

            <Text>All</Text>
          </Box>
        </Label>
        {vehicleTypes.map(type => (
          <Label
            key={type.name}
            className={selectedVehicleType === type.name ? 'activeFilter' : ''}
          >
            <Radio
              type="radio"
              name="vehicleType"
              value={type.name}
              checked={selectedVehicleType === type.name}
              onChange={handleVehicleTypeChange}
            />
            <Box>
              {/* <TbCamper size="24px" /> */}

              <Text>{type.label}</Text>
            </Box>
          </Label>
        ))}
      </FilterContainer>
    </div>
  );
};
