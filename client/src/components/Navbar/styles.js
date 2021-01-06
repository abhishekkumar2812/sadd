import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    position: relative;
    height: 300px;
    width: 100%;
    top: 0;
    background-color: purple;
    border-radius:30px;
`;

export const NavList = styled.div`
    width: 80%;
    height: 50px;
    position: absolute;
    bottom: 20px;
    background-color: pink;
    display: flex;
    flex-direction: row;
    left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  border-radius: 5px;
`;

export const NavItems = styled.div`
    margin: auto;
    padding: 5px;
    cursor: pointer;
`;