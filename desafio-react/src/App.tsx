import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { FilmPage } from './pages/FilmPage/FilmPage';
import StarWarHome from './pages/StarWarsPage/StarwarsPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route path='/' element={<StarWarHome />} errorElement={<ErrorPage />} />
        <Route path='/film/:id' element={<FilmPage />} />
      </Routes>
    </Router>)
}
export default App;
