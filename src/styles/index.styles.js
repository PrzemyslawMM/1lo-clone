import styled from 'styled-components';

export const FirstInformation = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  ${({ theme }) => theme.mq.bigPhone} {
    width: 600px;
  }
  ${({ theme }) => theme.mq.smallPC} {
    width: 700px;
    margin-left: 330px;
  }

  ${({ theme }) => theme.mq.PC} {
    margin: auto;
  }
`;

export const TheMostImportantInformation = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.b};
  padding-bottom: 3px;
  border-bottom: solid ${({ theme }) => theme.colors.bottom} 1px;
  font-family: Georgia sans-serif;
  font-weight: 400;
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  width: 200px;
  margin: auto;
  ${({ theme }) => theme.mq.bigPhone} {
    width: 500px;
  }
  ${({ theme }) => theme.mq.smallPC} {
    width: 700px;
  }
`;

export const Article = styled(H2)`
  color: ${({ theme }) => theme.colors.lightBlue};
  text-align: left;
  width: 100%;
  margin: 15px 0 0 0;
  border-bottom: solid ${({ theme }) => theme.colors.bottom} 1px;
  padding-bottom: 5px;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ArticleText = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const MoreButton = styled.a`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.lightBlue};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const AnchorToMCE = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 280px;
  margin: 15px auto;
  font-weight: 600;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  ${({ theme }) => theme.mq.bigPhone} {
    width: 580px;
  }

  ${({ theme }) => theme.mq.smallPC} {
    width: 700px;
  }
`;

export const ImgMCE = styled.img`
  width: 400px;
  height: 44px;

  ${({ theme }) => theme.mq.smallPC} {
    width: 600px;
    height: 66px;
    align-self: center;
  }
`;

export const ArticleWrapper = styled.article`
  margin-top: 30px;
`;
