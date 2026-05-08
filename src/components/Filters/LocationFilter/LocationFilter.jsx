import { useState } from 'react';
import { LuMapPin } from 'react-icons/lu';
import { Container, Input, InputIcon, Label } from './LocationFilter.styled';

export const LocationFilter = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');

  const handleFilterChange = event => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    onFilterChange(newLocation);
  };

  return (
    <Container>
      <Label>
        Location
        <Input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={handleFilterChange}
        />
        <InputIcon aria-hidden>
          <LuMapPin size={20} />
        </InputIcon>
      </Label>
    </Container>
  );
};
