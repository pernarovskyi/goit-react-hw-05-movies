import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation, NavLinkStyled, Container } from './Layout.styled';
import Loader from '../Loader'

const Layout = () => {
  return (
    <Container>
      <Navigation>
        <NavLinkStyled to="/" end>Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </Navigation>
      <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>        
      </main>
    </Container>
  );
};

export default Layout;
