import StarshipCard from "./StarshipCard";
import { useState, useEffect } from "react";





  
 

const StarshipList = ( {starships} ) => {
    // const starshipsArray = Object.values(starships);
    // const [starshipList, setStarshipList] = useState([])
    
  return (
    console.log(starships),
    // console.log(allStarships),
    <>
    <h2>List of Starships queried:</h2>
    <div>
      

      {starships.map((starship, index ) => (
        <StarshipCard key= {index} starship={starship} />
      ))}
      
      
     
        {/* <StarshipCard  starship={starships} /> */}
      
    </div>
   
    </>
    
  );
  
};

export default StarshipList;