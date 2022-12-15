import { ApolloProvider } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import StarWarsCard from '../compornent/common/Card';
import { formatarDataBrasil } from '../compornent/utils/FormataData';
import { client, query } from '../service/Api';



const StarWarHome = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    initial();
  }, []);

  function initial() {
    client
      .query({ query, })
      .then((res: {
        data: { allFilms: { films: React.SetStateAction<never[]> } }
      }) => setGetData(res.data.allFilms.films));
  }

  return (
    <ApolloProvider client={client}>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {getData ?
          getData.map((item: { title: string; releaseDate: string; director: string; id: string; openingCrawl: string, producers: string, episodeID: number }, index: React.Key | null | undefined) => (

            <StarWarsCard
              key={index}
              title={item.title}
              year={formatarDataBrasil(item.releaseDate)}
              director={item.director}
            />
          )) : 'Error'}

      </div>


    </ApolloProvider>
  );
}

export default StarWarHome;
