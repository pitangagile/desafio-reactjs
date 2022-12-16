import {
  ApolloClient,
  gql,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { SetStateAction } from "react";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });
};

export const query = gql`
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

export const initial = async (
  client: ApolloClient<NormalizedCacheObject>,
  setGetData: { (value: SetStateAction<never[]>): void; (arg0: any): void }
) => {
  try {
    const res = await client.query({ query });
    setGetData(res.data.allFilms.films);
  } catch (err) {
    console.error(err);
    window.location.href = "/404";
  }
};

export const client = createApolloClient();
