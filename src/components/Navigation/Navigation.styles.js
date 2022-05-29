import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 38px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 180px;
  position: relative;
`;

export const List = styled.ul`
  list-style: none;
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &:first-child {
    padding: 15px 15px;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ListItem = styled.li`
  display: none;
`;

export const Menu = styled.span`
  margin-left: 10px;
`;

const append = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    display: block;
  }
`;

const hide = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Image1 = styled.img`
  position: absolute;
  width: 100%;
  animation: both ${hide} 2s 5s linear;
`;

export const Image2 = styled.img`
  position: absolute;
  width: 100%;
  animation: both ${append} 2s 5s linear;
  animation: both ${hide} 2s 12s linear;
`;

export const Image3 = styled.img`
  position: absolute;
  width: 100%;
  animation: both ${append} 2s 12s linear;
  animation: both ${hide} 2s 17s linear;
`;

export const PositionRelative = styled.div`
  position: relative;
`;
