import { useState } from "react";

const StarshipSearch = ({onSearch}) => {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    onSearch(query); // Call the filtering function on each input change
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

    return (
        <section>
          <h2>Search</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="starship">Search starships by name, model, or manufacturer: </label>
            <input
              type="text"
              value={search}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </section>
      );   
}

export default StarshipSearch;