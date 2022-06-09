import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import {
  Content,
  FirstInformation,
  AnchorToMCE,
  Article,
  ArticleText,
  Date,
  H2,
  MoreButton,
  TheMostImportantInformation,
  ImgMCE,
  ArticleWrapper,
} from '../styles/index.styles';

const Home = () => {
  const [articles, setArticles] = useState([]);

  const query = `
          {
            allArticlesses {
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
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <>
      <Head>
        <title>
          Strona główna - 1 Liceum Ogólnokształcące im. St. Staszica
        </title>
      </Head>
      <Content>
        <FirstInformation>
          <TheMostImportantInformation>
            Strona główna
          </TheMostImportantInformation>
          <H2>Chrzowskie I LO w chmurze edukacyjnej</H2>
          <AnchorToMCE>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Zapraszamy na stronę <a href="#">Małopolska Chmura Edukacyjna</a>
          </AnchorToMCE>
          <ImgMCE src="https://www.1lo.pl/files/chmura.jpg" alt="" />
        </FirstInformation>
        {articles.map((element) => {
          // eslint-disable-next-line no-underscore-dangle
          const createdAt = element._createdAt.substring(0, 10);
          return (
            <ArticleWrapper key={element.id}>
              <Article>{element.title}</Article>
              <Date>{createdAt}</Date>
              <ArticleText>{element.smallDescription}</ArticleText>
              {element.descripton === '' ? null : (
                <Link
                  href={{
                    pathname: '/articles',
                    query: { keyword: element.id },
                  }}
                >
                  <MoreButton>więcej &gt;&gt;</MoreButton>
                </Link>
              )}
            </ArticleWrapper>
          );
        })}
      </Content>
    </>
  );
};

export default Home;
