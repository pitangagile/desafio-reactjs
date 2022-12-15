import { useLocation } from 'react-router-dom';
export const FilmPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data)
  return <div>FilmPage: {data[1][0]}</div>;
};
