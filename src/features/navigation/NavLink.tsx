import { Link } from '@reach/router';
// import { useRouter } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { RouteUrl } from './routes';

const ActiveLink = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 2px;
  text-decoration: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${({ theme }) => theme.font.color.default};
  &:hover {
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

const InactiveLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 2px;
  text-decoration: underline;
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${({ theme }) => theme.font.color.default};
`;

type NavLinkProps = {
  href: RouteUrl;
  location?: Location;
};
const NavLink: React.FC<NavLinkProps> = ({ children, href, location }) => {
  if (location?.pathname === href) {
    return <InactiveLink>{children}</InactiveLink>;
  }

  return (
    <Link to={href}>
      <ActiveLink>{children}</ActiveLink>
    </Link>
  );
};

export default NavLink;
