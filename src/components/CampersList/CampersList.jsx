import CamperCard from '../CamperCard/CamperCard';
import { ListStyle } from '../CampersList/CampersList.styled';

export const CampersList = ({ campers }) => {
  console.log(campers);
  return (
    <div>
      <ListStyle>
        {campers.map(camper => (
          <CamperCard key={camper._id} camper={camper} />
        ))}
      </ListStyle>
    </div>
  );
};
