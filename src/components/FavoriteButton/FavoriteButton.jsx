import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, addFavorite } from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';
import { FavButton } from './FavoriteButton.styled';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoriteButton = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(fav => fav.id === camper.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };
  console.log(camper.id);
  return (
    <FavButton onClick={handleFavoriteClick}>
      {isFavorite ? <FaHeart size="20px" /> : <FaRegHeart size="20px" />}
    </FavButton>
  );
};

export default FavoriteButton;
