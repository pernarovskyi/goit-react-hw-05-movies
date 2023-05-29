import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #cccccc;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 30px;
`;

const NavLinkStyled = styled(NavLink)`
  margin-right: 20px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

export { Navigation, NavLinkStyled, Container };
