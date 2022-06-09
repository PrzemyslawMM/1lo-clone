import styled from 'styled-components';
import {
  Content,
  H2,
  MoreButton,
  TheMostImportantInformation,
} from './index.styles';

export const Wrapper = styled(Content)`
  text-align: center;
  padding-top: 35px;
`;

export const Description = styled(H2)`
  padding-top: 100px;
  text-align: justify;
`;

export const ArticleImage = styled.img`
  padding-top: 100px;
`;

export const BackButton = styled(MoreButton)`
  margin-top: 150px;
  margin-bottom: 80px;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.b};

  ${({ theme }) => theme.mq.smallPC} {
    margin-bottom: 1500px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const TitleOfNews = styled(TheMostImportantInformation)`
  font-weight: bold;
  padding-bottom: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.bottom};
`;
