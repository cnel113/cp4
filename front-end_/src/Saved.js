import React from "react";
import ReactDOM from "react-dom";
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
  }
  
   useEffect(() => {
     fetchSaved();
    },[props.numItems]); //Propably need to figure out a prop to send this to tell it to rerender when a new page pulls up
  
  return (
    <div>
    {error}
      <h1> Saved Items </h1>
        {savedItems?.map(artPiece => (
          <div key={artPiece.artID} className="saved">
              <p>{artPiece.name}</p>
              <p>{artPiece.artist}</p>
              <img src={artPiece.imgURL}/>
          </div>
        ))}   
      
    </div>
  );
}

export default Saved;

//{saved.saved ?   : <p> No Saved Items </p>}  

/*
   {saved.saved.map(artPiece => (
        <div key={artPiece.artID} className="saved">
            <p>{artPiece.name}</p>
            <p>{artPiece.artist}</p>
            <img src={artPiece.imgURL}/>
        </div>
      ))}   */