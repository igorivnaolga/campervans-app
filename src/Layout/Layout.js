import Header from 'components/Header/Header';
import { StyledHeader } from 'components/Header/Header.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      
        <Outlet />
    
    </>
  );
};
export default Layout;
