import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RoutesContainer = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 15px;

    li{
    list-style: none; 
    }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 15px;
  padding: 15px;

  &.active {
    color: orange;
  }
`;

