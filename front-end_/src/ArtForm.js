import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayPiece from "./DisplayPiece.js"


function ArtForm() {
    //const response = axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/1000") Added to try to get setDisplayPiece working
   // const initialState = response; Added to try to get setDisplayPiece working
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

    var collectionSize = 0;
    
    let displayPieceID = 1000;
    
    const fetchArtCollection = async() => {
        try {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
            const response = await axios.get(url);
            console.log("Fetching Collection" + response);
            setArtCollection(response.data.objectIDs);
            collectionSize = response.data.total;
            console.log("Collection Size" + collectionSize);
            
        }
        catch(error) {
            setError("error retrieving art collection" + error);
        }
    }
    
     const fetchDisplayPiece = async() => {  //    function fetchDisplayPiece() {
        //It looks like the problem is that it is not calling this function when it is in the useEffect function. 
        //Even when it gets to the setDisplayPiece (it doesn't ever execute if useEffect calls this because it skips ahead to the render and then 
        //artistName is undefined before it can comeback and set the state here). apparantly setState is also async and only updates on the NEXT render but I need it for the intial render
        //In the debugger, after setDisplayPiece is called and the next lines execute displayPiece is still empty! Response isn't either. 
        try {
            //var objectID = 1112;
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + displayPieceID;
            const response = await axios.get(url);
            const str = JSON.stringify(response);
            
            console.log("specific object response" + str);
            setDisplayPiece(response);
            const str2 = JSON.stringify(displayPiece);
            console.log("display piece " + str2);
            return(response);
        }
        catch(error) {
            setError("error retrieving art piece" + error);
        }
    }
    
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            fetchDisplayPiece();
        }
        catch {
            
        }
    }
    
    
    useEffect(() => { //calls these functions when you first start the page
        fetchDisplayPiece();
        fetchArtCollection();
    },[]);
    
    //fetchDisplayPiece();
    
        
            // add this back when ready <DisplayPiece artpiece={displayPiece}/>
            return (
                <div className = "page">
                    {error}
                    {collectionSize != 0 ? <h1>Enjoy {collectionSize} pieces of art from the Met</h1> : <h1> Enjoy many pieces of art from the Met </h1>} 
                    <h3>Find your new favorite art </h3>
                    <form className="color-search" onSubmit={e => handleSubmit(e)}>
                        <legend>Search through the whole museum or a specific department</legend>
                        <input type="submit" value="Submit"/>
                    </form>
                    <div> {results}
                        {displayPiece.data ? <DisplayPiece artpiece={displayPiece}/> : <div></div>}
                    </div>
                </div> 
            );
    }
export default ArtForm;
    