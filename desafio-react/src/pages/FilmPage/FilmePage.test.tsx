import { render } from '@testing-library/react';
import { FilmPage } from './FilmPage';


test('renders the film page with the correct data', () => {
  const filmData = {
    title: 'A New Hope',
    describe: 'An epic space adventure set in a galaxy far, far away...',
    director: 'George Lucas',
    create: 'May 25, 1977',
    epsode: 4,
    producers: ['Gary Kurtz', 'Rick McCallum']
  };
  const { getByText } = render(<FilmPage />);

  expect(getByText(filmData.title)).toBeInTheDocument();
  expect(getByText(filmData.describe)).toBeInTheDocument();
  expect(getByText(`Dirigido por: ${filmData.director}`)).toBeInTheDocument();
  expect(getByText(`Criado em: ${filmData.create}`)).toBeInTheDocument();
  expect(getByText(`Epsódio: ${filmData.epsode}`)).toBeInTheDocument();
  filmData.producers.forEach(producer => {
    expect(getByText(producer)).toBeInTheDocument();
  });
});
