import { ApolloProvider, gql } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import './App.css';
import StarWarsCard from './compornent/common/Card';
import { client } from './service/Api';

function App() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    initial();
  }, []);

  function initial() {
    const query = gql`
      query {
        allFilms {
          films {
            title
            director
            releaseDate
            id
            episodeID
            producers
            openingCrawl
            created
            edited
          }
        }
      }
    `;

    client
      .query({
        query,
      })
      .then((res) => setGetData(res.data.allFilms.films));
  }

  return (
    <ApolloProvider client={client}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {getData &&
          getData.map((item: { title: string; releaseDate: string; director: string; id: string; }, index: React.Key | null | undefined) => (
            <StarWarsCard
              key={index}
              title={item.title}
              year={item.releaseDate}
              director={item.director}
              onclick={() => alert(`item.${item.id}`)}
            />
          ))}
      </div>
    </ApolloProvider>
  );
}

export default App;
