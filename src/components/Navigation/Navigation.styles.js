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

  ${({ theme }) => theme.mq.smallPC} {
    width: 1000px;
  }

  ${({ theme }) => theme.mq.bigPC} {
    width: 1600px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 38px;

  ${({ theme }) => theme.mq.smallPC} {
    position: relative;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  padding-top: 25px;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({ isOpen }) => (isOpen ? '900px' : '0')};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  height: 50px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  font-family: Georgia sans-serif;
  font-size: ${({ theme }) => theme.fontSize.normal};
  position: relative;

  ${({ theme }) => theme.mq.smallPC} {
    display: flex;
    align-items: flex-start;
    width: 250px;
    margin-right: 30px;
  }
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

  ${({ theme }) => theme.mq.smallPC} {
    display: none;
  }
`;

export const ListItem = styled.li`
  justify-self: center;
  height: 100%;
  margin-left: 0;
  padding-left: 40px;
  border-bottom: ${({ theme }) => theme.colors.bottom} 1px solid;
  background: ${({ theme }) => theme.colors.white};
  z-index: 99;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.mq.smallPC} {
    width: 100%;
    height: 100px;
  }

  ${({ theme }) => theme.mq.PC} {
    margin-left: auto;
  }
`;

export const Menu = styled.span`
  margin-left: 10px;
`;

export const PatronsWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mq.smallPC} {
    display: block;
  }
  ${({ theme }) => theme.mq.PC} {
    display: block;
  }
`;
