import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import {
  TitleOfNews,
  ArticleImage,
  BackButton,
  Description,
  Wrapper,
} from '../../styles/artycles.index.style';

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
        if (iteration < 5) setIteration((iteration) => iteration + 1);
      })
      .catch((error) => console.log(error));
  }, [iteration]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Head>
        <title>Artykuł - 1 Liceum Ogólnokształcące im. St. Staszica</title>
      </Head>
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
