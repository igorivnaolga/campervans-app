import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import CamperCard from '../../components/CamperCard/CamperCard';
import { ListStyle } from 'components/CampersList/CampersList.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div>
      <ListStyle>
        {favorites.length > 0 ? (
          favorites.map(camper => (
            <CamperCard key={camper._id} camper={camper} />
          ))
        ) : (
          <p>No favorites added</p>
        )}
      </ListStyle>
    </div>
  );
};
export default Favorites;
