import { render } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';


test('renders the error page with the correct image', () => {
  const { getByAltText } = render(<ErrorPage />);

  expect(getByAltText('Error image')).toBeInTheDocument();
});
