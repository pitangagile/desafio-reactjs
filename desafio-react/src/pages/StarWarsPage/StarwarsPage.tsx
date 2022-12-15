import { ApolloProvider } from '@apollo/client';
import { useEffect, useState } from 'react';
import StarWarsCard from '../../compornent/common/Card';
import { formatarDataBrasil } from '../../compornent/utils/FormataData';
import { client, initial } from '../../service/Api';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import * as S from './Styles';

interface StarWarsData {
  title: string;
  releaseDate: string;
  director: string;
  id: string;
  openingCrawl: string;
  producers: string;
  episodeID: number;
}
const StarWarHome = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    initial(client, setGetData);
  }, []);



  return (
    <ApolloProvider client={client}>
      <S.Container>
        {getData &&
          getData.flatMap((item: StarWarsData
            , index: React.Key | null | undefined) => (
            <S.LinkStyled
              key={index}
              to={`film/${item.id}`}
              state={[
                item.openingCrawl,
                item.producers,
                item.episodeID,
                item.releaseDate,
                item.director,
                item.title]}
            >
              <StarWarsCard
                key={index}
                title={item.title}
                year={formatarDataBrasil(item.releaseDate)}
                director={item.director}
              />
            </S.LinkStyled>
          )) || <ErrorPage />}


      </S.Container>
    </ApolloProvider >
  );
}

export default StarWarHome;
