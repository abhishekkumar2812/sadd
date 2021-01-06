import styled from 'styled-components/macro';

export const LeftSideBarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 20%;
    z-index: 3;
    border-radius: 5px;
    background-color: black;
    display: ${(props) => (props.leftBar ? 'none' : '')};
`;

export const ArrowContainer = styled.div`
    height: 40px;
    width: 40px;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 50%;
    border-radius: 20px;
    background-color: ${(props) => (props.leftBar ? 'black' : 'white')};
    left: ${(props) => (props.leftBar ? '0' : '17%')};
`