import Header from 'components/Header/Header';
import { StyledHeader } from 'components/Header/Header.styled';
import Modal from '../components/Modal/Modal.jsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Suspense fallback={null}>
        <Modal />
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
