import { useState } from 'react';
import { Box, Checkbox, FilterContainer, Label, Title } from './EquipmentFilter.styled';
import { BsWind } from 'react-icons/bs';
import { MdOutlineTv } from 'react-icons/md';
import { LuBath } from 'react-icons/lu';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';

const initialEquipmentState = {
  airConditioner: false,
  automaticTransmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

const checkboxes = [
  { name: 'airConditioner', label: 'AC', icon: BsWind },
  { name: 'automaticTransmission', label: 'Automatic', icon: TbAutomaticGearbox },
  { name: 'kitchen', label: 'Kitchen', icon: TbToolsKitchen2 },
  { name: 'TV', label: 'TV', icon: MdOutlineTv },
  { name: 'bathroom', label: 'Shower/WC', icon: LuBath },
];

export const EquipmentFilter = ({ onFilterChange }) => {
  const [equipment, setEquipment] = useState(initialEquipmentState);

  const handleEquipmentChange = event => {
    const { name, checked } = event.target;
    setEquipment(prevEquipment => ({ ...prevEquipment, [name]: checked }));

    const filterData =
      name === 'bathroom' ? { bathroom: checked } : { [name]: checked };
    onFilterChange(filterData);
  };
  return (
    <div>
      <Title>Vehicle equipment</Title>
      <FilterContainer>
        {checkboxes.map(checkbox => {
          const IconComponent = checkbox.icon;
          return (
            <Label
              key={checkbox.name}
              className={equipment[checkbox.name] ? 'activeFilter' : ''}
            >
              <Checkbox
                type="checkbox"
                name={checkbox.name}
                checked={equipment[checkbox.name]}
                onChange={handleEquipmentChange}
              />
              <Box>
                <IconComponent size={28} aria-hidden />
                <p>{checkbox.label}</p>
              </Box>
            </Label>
          );
        })}
      </FilterContainer>
    </div>
  );
};
