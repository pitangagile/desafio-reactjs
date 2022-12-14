import { ApolloProvider, gql } from '@apollo/client';
import { useEffect } from 'react';
import './App.css';
import StarWarsCard from './compornent/common/Card';
import { client } from './service/Api';




function App() {

  useEffect(() => {
    initial()
  }, [initial])

  function initial() {
    client.query({
      query: gql`
      query Query {
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
    `,
    }).then((res) => console.log(res.data.allFilms.films))
  }



  return (
    <ApolloProvider client={client}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div>

        </div>

        <StarWarsCard key="index" title="title" year='25/05/1977' director='George Lucas' onclick={() => alert(`teste`)} />

      </div>
    </ApolloProvider>
  );
}

export default App;
