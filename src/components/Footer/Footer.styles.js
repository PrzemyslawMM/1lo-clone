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
`;

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.blue};
  margin: 0;
  padding-bottom: 40px;
  font-family: Georgia sans-serif;

  & ul {
    margin: 0;
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
  margin: auto;
  width: 300px;
  grid-template-columns: 150px 130px;
  grid-gap: 15px;
  color: ${({ theme }) => theme.colors.white};
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
`;
