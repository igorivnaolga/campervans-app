import { useState } from 'react';
import { Container, Icon, Input, Label } from './LocationFilter.styled';

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
        <Icon></Icon>
      </Label>
    </Container>
  );
};
