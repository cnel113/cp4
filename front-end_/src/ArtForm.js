import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DisplayPiece from "./DisplayPiece.js";
import Saved from "./Saved.js";


function ArtForm() { 
    const [error, setError] = useState("");
    const [displayPieceID, setDisplayPieceID] = useState(2000);
    const [collection, setCollection] = useState([]);
    const currentIndex = useRef(-1);
    const [numSaved, setNumSaved]= useState(0);

    function fetchArtCollection() {
        try {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
            const response = axios.get(url);
            //const public_art = response.filter(item => item.)
            console.log("Fetching Collection");
            return response;
        }
        catch(error) {
            setError("error retrieving art collection" + error);
        }
    };
    
    const handleFetchCollection = async() => { 
                try {
                    fetchArtCollection().then (
                        (response) => {
                            console.log(response);
                            setCollection(response.data.objectIDs);
                            return response;
                        }
                    );
                }
                
                catch(error) {
                    setError("error handling art collection" + error);
                }
            };
    
    function increaseIndex() {
        console.log("collection length" + collection.length);
        if (currentIndex.current < collection.length) {
            currentIndex.current = currentIndex.current + 1;
            return currentIndex;
        }
        else {
            return currentIndex;
        }
    }
    
    function decreaseIndex() {
        console.log("collection length" + collection.length);
        if (currentIndex.current > 0) {
            currentIndex.current = currentIndex.current - 1;
            return currentIndex;
        }
        else {
            return currentIndex;
        }
    }
    
    const handleNext = (e) => {
        e.preventDefault();
        console.log("In next print collection");
        console.log(collection); 
        if (currentIndex.current === -1) {
            const index = collection.findIndex(element => element === 2000);
            currentIndex.current = index;
        } 
      
        increaseIndex(); 
        setDisplayPieceID(collection[currentIndex.current]);
    };
    
    const handlePrevious = (e) => {
       e.preventDefault();
        console.log("In previous");
        if (currentIndex.current === -1) {
            const index = collection.findIndex(element => element === 2000);
            currentIndex.current = index;
        } 
        decreaseIndex();
        setDisplayPieceID(collection[currentIndex.current]);
    };
    
    
    const clearSaved = async() => {
        try {
          await axios.delete("/api/saved");
        } catch(error) {
          setError("error clearing all saved " + error);
        }
    };
    
   
    function addSave()  { 
        setNumSaved(numSaved + 1);
        
    };  
    
    
    useEffect(() => {
        
    },[displayPieceID, collection.length], numSaved);
    
    
    useEffect(() => {
        handleFetchCollection();
        clearSaved(); 
    },[]);
    
    return (
        <div className = "page">
            <h1>Enjoy art from the Met</h1>
            <p className="subtitle">Explore to find your new favorite art</p>
            <form className="art-search">
            </form>
            <div className="art-results"> 
                <DisplayPiece displayPieceID={displayPieceID} numSaved={numSaved}/>
                <div className="search-buttons"> 
                    {collection.length != 0 ? <a href="#" className="previous round" onClick={e => handlePrevious(e)}>&#8249;</a> : <p> Loading button </p>}
                    {collection.length != 0 ? <a href="#" className="next round" onClick={e => handleNext(e)}>&#8250;</a> : <p> Loading button </p>}
                </div>
                {collection.length != 0 ? <button className="save-button" onClick={e => addSave(e)}>Save</button> : <p> loading button </p>}
            </div> 
            <Saved numSaved={numSaved}/>
        </div> 
    );
}

export default ArtForm; 