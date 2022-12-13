import './App.css';
import StarWarsCard from './compornent/common/Card';

const items = [{}]

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <StarWarsCard title='A New Rope' year='25/05/1977' director='George Lucas' onclick={() => alert(`teste`)} />
    </div>
  );
}

export default App;
