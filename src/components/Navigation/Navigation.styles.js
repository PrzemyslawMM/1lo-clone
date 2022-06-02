import styled from 'styled-components';

export const WrapperLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.mq.bigPhone} {
    width: 600px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 38px;
`;

export const StyledNav = styled.nav`
  display: flex;
  padding-top: 25px;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({ isOpen }) => (isOpen ? '700px' : '0')};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  height: 50px;
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  grid-template-columns: 1fr;
  font-family: Georgia sans-serif;
  font-size: ${({ theme }) => theme.fontSize.normal};
  grid-template-rows: 50px;
  position: relative;
`;

export const Hamburger = styled.div`
  padding: 15px 15px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 0;
  padding-left: 40px;
  border-bottom: ${({ theme }) => theme.colors.bottom} 1px solid;
  background: ${({ theme }) => theme.colors.white};
  z-index: 99;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Menu = styled.span`
  margin-left: 10px;
`;

export const PositionRelative = styled.div`
  position: relative;
`;
