import styled from 'styled-components';

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

  ${({ theme }) => theme.mq.smallPC} {
    display: flex;
    align-items: center;
    height: 374px;
    padding-left: 30px;
    margin-top: 180px;
  }

  ${({ theme }) => theme.mq.PC} {
    justify-content: center;
    padding-left: 0;
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

  ${({ theme }) => theme.mq.bigPhone} {
    grid-template-columns: 190px 190px;
    margin: auto auto auto 25px;
  }

  ${({ theme }) => theme.mq.smallPC} {
    grid-template-columns: 187px 187px 187px 187px;
    margin: 0 0 0 30px;
  }

  ${({ theme }) => theme.mq.PC} {
    width: 600px;
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

export const WrapperPatrons = styled.div`
  ${({ theme }) => theme.mq.smallPC} {
    display: none;
  }
  ${({ theme }) => theme.mq.PC} {
    display: none;
  }
  ${({ theme }) => theme.mq.bigPC} {
    display: none;
  }
`;
