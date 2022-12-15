import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

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
