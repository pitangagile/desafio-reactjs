import { render, screen } from '@testing-library/react';
import StarWarsCard from './Card';


test('renders title, year, and director', () => {
  const title = 'A New Hope';
  const year = '25/05/1977';
  const director = 'George Lucas';

  render(
    <StarWarsCard title={title} year={year} director={director} />
  );
  console.log(screen.getByText(title))
  // Assert that the title, year, and director are rendered
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(year)).toBeInTheDocument();
  expect(screen.getByText(director)).toBeInTheDocument();
});
