import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Content,
  H2,
  MoreButton,
  TheMostImportantInformation,
} from '../../styles/index.styles';

const Wrapper = styled(Content)`
  text-align: center;
  padding-top: 35px;
`;

const Description = styled(H2)`
  padding-top: 100px;
  text-align: justify;
`;

const ArticleImage = styled.img`
  padding-top: 100px;
`;

const BackButton = styled(MoreButton)`
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

const TitleOfNews = styled(TheMostImportantInformation)`
  font-weight: bold;
  padding-bottom: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.bottom};
`;

const ArticlesPage = ({ keyword }) => {
  const [articles, setArticles] = useState([]);
  const [iteration, setIteration] = useState(1);
  const router = useRouter();
  console.log(keyword);

  useEffect(() => {
    if (keyword === undefined || keyword === '') {
      router.push('/');
    }
  }, []);

  const query = `
          {
            allArticlesses(filter: {id: {eq: "${keyword}"}}) {
              id
              title
              smallDescription
              descripton
              _createdAt
              _status
              _firstPublishedAt
              image {
                url
              }
            }
          }
      `;
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer 18ebccebbc3a3c77ee274fc3efdecb`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticlesses);
      })
      .then(() => {
        console.log(articles);
      })
      .then(() => {
        if (iteration < 5) setIteration((iteration) => iteration + 1);
      })
      .catch((error) => console.log(error));
  }, [iteration]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {articles === [] ? (
        <Wrapper>
          <TitleOfNews>Loading</TitleOfNews>
        </Wrapper>
      ) : (
        articles.map((element) => (
          <Wrapper key={element.id}>
            {}
            <TitleOfNews>{element.title}</TitleOfNews>
            <Description>{element.descripton}</Description>
            <ArticleImage src={element.image.url} alt="" />
            <Link href="/">
              <BackButton>Powrót</BackButton>
            </Link>
          </Wrapper>
        ))
      )}
    </>
  );
};

ArticlesPage.getInitialProps = async ({ query }) => {
  return query;
};

export default ArticlesPage;
