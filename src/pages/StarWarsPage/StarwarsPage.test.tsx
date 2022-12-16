import { render } from '@testing-library/react';
import StarWarHome from './StarwarsPage';


test('renders a list of Star Wars films', () => {
  const { getByText } = render(<StarWarHome />);

  const filmTitles = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
  filmTitles.forEach(title => {
    expect(getByText(title)).toBeInTheDocument();
  });
});
