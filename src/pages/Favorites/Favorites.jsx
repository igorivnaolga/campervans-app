import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import CamperCard from '../../components/CamperCard/CamperCard';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div>
      <h2>Favorite Campers</h2>
      {favorites.length > 0 ? (
        favorites.map(camper => <CamperCard key={camper.id} camper={camper} />)
      ) : (
        <p>No favorites added</p>
      )}
    </div>
  );
};
export default Favorites;
