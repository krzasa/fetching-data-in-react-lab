import { useState, useEffect } from 'react'
import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import StarshipCard from './components/StarshipCard';
import './App.css'

const App = () => {
  // const [starships, setStarships] = useState([])
  // const [starship, setStarship] = useState('')
  const [starshipData, setStarshipData] = useState([])  // previously []
  const [filter, setFilter] = useState([]);

  const fetchData = async () => {
    const data = await starshipService.show()
    setStarshipData(data)
    setFilter(data);
  }
  


  useEffect(() => {
    fetchData();
  }, []);
  const filterStarships = (query) => {
    const filtered = starshipData.filter(starship =>
      starship.name.toLowerCase().includes(query.toLowerCase()) ||
      starship.model.toLowerCase().includes(query.toLowerCase()) ||
      starship.manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    setFilter(filtered);
  };


  return (
    <><h1>List of Startships</h1>
    <StarshipSearch onSearch={filterStarships}  />
    <StarshipList starships={filter}  />
    </>
  );
}

export default App