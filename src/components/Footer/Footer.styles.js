import styled from 'styled-components';

export const Patrons = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.bottom};
  padding-top: 15px;
  width: 270px;
  margin: auto auto 15px auto;
  display: grid;
  grid-template-columns: 130px 130px;
  grid-gap: 15px;

  a {
    display: flex;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.bigPhone} {
    width: 570px;
    grid-template-columns: 190px 190px 190px;
  }
`;

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.blue};
  margin: 0;
  padding-bottom: 40px;
  font-family: Georgia sans-serif;

  & ul {
    margin: 0;
  }

  ${({ theme }) => theme.mq.bigPhone} {
    display: flex;
    padding-top: 40px;
    padding-left: 60px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bottom};
  width: 200px;
  padding-bottom: 7px;
  margin-bottom: 7px;
`;

export const Table = styled.div`
  display: grid;
  margin: auto auto auto 100px;
  width: 300px;
  grid-template-columns: 150px 130px;
  grid-gap: 15px;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.bigPhone} {
    grid-template-columns: 190px 190px;
  }
`;

export const Title = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.colors.bottom};
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding-bottom: 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};

  li {
    padding-bottom: 15px;
  }

  ${({ theme }) => theme.mq.bigPhone} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const PatronImage = styled.img`
  width: ${({ isRectangle }) => (isRectangle ? '120px' : '80px')};
  height: 80px;

  ${({ theme }) => theme.mq.bigPhone} {
    width: ${({ isRectangle }) => (isRectangle ? '160px' : '120px')};
    height: 100px;
  }
`;
