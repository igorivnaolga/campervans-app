import { StyledList, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </li>
    </StyledList>
  );
};
export default Header;
