import { useLocation } from 'react-router-dom';
export const FilmPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data)
  return <>
    FilmPage: {data[1][0]}
    <br />
    FilmPage: {data[1][1]}
  </>
};
