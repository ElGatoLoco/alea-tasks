import { RouteComponentProps } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import routes from './routes';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
`;
const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.li`
  flex: 1;
`;

const Navbar: React.FC<RouteComponentProps> = ({ children, location }) => (
  <>
    <Nav>
      <List>
        <Item>
          <NavLink location={location} href={routes.dragAndDrop}>
            Drag and Drop
          </NavLink>
        </Item>
        <Item>
          <NavLink location={location} href={routes.modal}>
            Modal
          </NavLink>
        </Item>
        <Item>
          <NavLink location={location} href={routes.form}>
            Form
          </NavLink>
        </Item>
      </List>
    </Nav>
    {children || null}
  </>
);

export default Navbar;
