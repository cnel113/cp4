import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DisplayPiece from "./DisplayPiece.js";


function ArtForm() { 
    //Data from API:
    // object (individual piece of art)
    // objects (list of available objects)
    // Deparments. array with department ids and the department names
    // Search function
    // For this lab, I think I will make a basic viewer where you can scroll through the art work, 
    //for the bigger lab I could expand out to the search function
    
    //const [deptIds, setDeptList] = useState([]); //calls API once and then stores list in backend to make future calls to 
    const [error, setError] = useState("");
    const [results, setResults] = useState("");
    const [pieceUpdated, setPieceUpdated] = useState(true);
    const [collectionSize, setCollectionSize] = useState("");
    const [displayPieceID, setDisplayPieceID] = useState(2000);
    const [saved, setSaved] = useState([]);
    const [collection, setCollection] = useState([]);
    
    const currentIndex = useRef(-1);
    
    //Get next id, indexes through my list from the collection
    
    function fetchArtCollection() {
        try {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
            const response = axios.get(url);
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
        decreaseIndex();
        setDisplayPieceID(collection[currentIndex.current]);
    };
    
    
    const updatePiece = () => {
        setPieceUpdated(true);
    };
    
    
    /*const handleSubmit = (e) => {
        e.preventDefault();
        try {
            //fetchDisplayPiece();
        }
        catch {
            
        }
    }
    */
    
    const addSave = async(e) => { //Need to learn how to connect this to another component
        e.preventDefault();
        try {
            await axios.post("/api/saved", {displayPieceID});

        }
        catch(error) {
            setError("Error saving item " + error);
        }
    }
    
    
    useEffect(() => {
        
    },[displayPieceID, collection.length]);
    
    useEffect(() => {
        handleFetchCollection();
    },[]);
    
    return (
        <div className = "page">
            {error}
            {collectionSize !== 0 ? <h1>Enjoy {collectionSize} pieces of art from the Met</h1> : <h1> Enjoy many pieces of art from the Met </h1>} 
            <h3>Find your new favorite art </h3>
            <form className="art-search">
                <legend>Search through the whole museum or a specific department</legend>
            </form>
            <div> {results}
                <DisplayPiece displayPieceID={displayPieceID}/>
               {collection.length != 0 ? <a href="#" className="previous round" onClick={e => handlePrevious(e)}>&#8249;</a> : <p> Loading data </p>}
                {collection.length != 0 ? <a href="#" className="next round" onClick={e => handleNext(e)}>&#8250;</a> : <p> Loading data </p>}
                <button className="save" onClick={e => addSave(e)}>Save</button>
            </div> 
        </div> 
    );
}
export default ArtForm; 

//                        {displayPiece.data ? <DisplayPiece artpiece={displayPiece} displayPieceID={displayPieceID}/> : <div></div>}

// {displayPieceID.current != 0 ? <DisplayPiece displayPieceID={displayPieceID}/> : <div></div>}


// {displayPieceID.current != 0 ? <DisplayPiece artpiece={displayPiece} displayPieceID={displayPieceID}/> : <div></div>}
//<input type="submit" value="Submit"/>
//onSubmit={e => handleSubmit(e)}
    