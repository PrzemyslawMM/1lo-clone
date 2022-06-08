import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Content, H2, Date } from '../../styles/index.styles';

const Wrapper = styled.div``;

const ArticlesPageWithID = ({ id }) => {
  const [articles, setArticles] = useState([]);
  const [iteration, setIteration] = useState(1);
  const query = `
          {
            allArticlesses(filter: {id: {eq: "${id}"}}) {
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
    <Wrapper>
      {console.log(articles)}
      <Content>
        <H2>Title</H2>
      </Content>
    </Wrapper>
  );
};

ArticlesPageWithID.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default ArticlesPageWithID;
