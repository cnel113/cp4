import axios from 'axios';
import { useState, useEffect} from 'react';

function Saved(props) {
  const [error, setError] = useState("");
  const [savedItems, setSaved] = useState([]);
  
  const fetchSaved = async() => {
    try {
      const response = await axios.get("/api/saved");
      setSaved(response.data.saved);
    }
    catch(error) {
      setError("error retrieving saved items: " + error);
    }
  };
  
   useEffect(() => {
     fetchSaved();
    },[props.numSaved]); 
    
    useEffect(() => {
    },[savedItems]);
    
  
  return (
    <div className="saved-container">
      <h2> Saved Items </h2>
        {savedItems?.map(artPiece => (
          <div key={artPiece.artID} className="saved-item">
              <p className="title">{artPiece.name}</p>
              <p>{artPiece.artist}</p>
              <img src={artPiece.imgURL}/>
          </div>
        ))}   
    </div>
  );
}

export default Saved;