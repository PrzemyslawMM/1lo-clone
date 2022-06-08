import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Content } from '../../styles/index.styles';

const Wrapper = styled.div``;

const ArticlesPageWithID = ({ id }) => {
  const [articles, setArticles] = useState([]);
  const [iteration, setIteration] = useState(1);
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
      .then(() => {
        console.log(articles);
        const c = articles.filter((item) => item.id === id);
        console.log(c);
      })
      .then(() => {
        switch (iteration) {
          case 1:
            setIteration(2);
            break;
          case 2:
            setIteration(3);
            break;
          case 3:
            setIteration(4);
            break;
          case 4:
            setIteration(5);
            break;
          default:
            break;
        }
      })
      .catch((error) => console.log(error));
  }, [iteration]);

  return (
    <Wrapper>
      <Content>dnsiaodnsiao</Content>
    </Wrapper>
  );
};

ArticlesPageWithID.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default ArticlesPageWithID;
