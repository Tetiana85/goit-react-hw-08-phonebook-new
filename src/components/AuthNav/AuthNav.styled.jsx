import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &.hover,
  &.active {
    color: orange;
    text-decoration: underline;
  }
`;