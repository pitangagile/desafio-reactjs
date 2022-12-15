import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FilmPage } from './pages/FilmPage';
import StarWarHome from './pages/StarwarsPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<StarWarHome />} />
        <Route path=':id' element={<FilmPage />} />
      </Routes>
    </Router>)
}
export default App;
