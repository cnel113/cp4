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
    
    const [artIds, setArtCollection] = useState([]);
    const [displayPiece, setDisplayPiece] = useState({}); // 
    //const [deptIds, setDeptList] = useState([]); //calls API once and then stores list in backend to make future calls to 
    const [error, setError] = useState("");
    const [results, setResults] = useState("");
    const [pieceUpdated, setPieceUpdated] = useState(true);
    const [collectionSize, setCollectionSize] = useState("");
    //const [displayPieceID, setDisplayPieceID] = useState(1000);
    const [saved, setSaved] = useState([]);
    
    const displayPieceID = useRef(1000);
   //var collectionSize = 0;
    
    const fetchArtCollection = async() => {
        try {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
            const response = await axios.get(url);
            console.log("Fetching Collection" + response);
            setArtCollection(response.data.objectIDs);
            setCollectionSize(response.data.total);
           // collectionSize = response.data.total;
            console.log("Collection Size" + collectionSize);
            
        }
        catch(error) {
            setError("error retrieving art collection" + error);
        }
    };
    
    const handleNext = (e) => {
        e.preventDefault();
        displayPieceID.current = displayPieceID.current + 1;
        updatePiece();
    };
    
    const handlePrevious = (e) => {
        e.preventDefault();
        //displayPieceID = parseInt(displayPieceID) - 1;
        displayPieceID.current = displayPieceID.current - 1;
        updatePiece();
        //fetchDisplayPiece();
    }
    
    
    const updatePiece = () => {
        setPieceUpdated(true);
        }
    
    
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
    
        /*if (pieceUpdated) {
            console.log("Inside updating piece");
            fetchDisplayPiece();
            setPieceUpdated(false);
        }*/
    
        //fetchArtCollection(); put in its own use effect later
    },[]); //pieceUpdated
        
            // add this back when ready <DisplayPiece artpiece={displayPiece}/>
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
                        <a href="#" className="previous round" onClick={e => handlePrevious(e)}>&#8249;</a>
                        <a href="#" className="next round" onClick={e => handleNext(e)}>&#8250;</a>
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
    