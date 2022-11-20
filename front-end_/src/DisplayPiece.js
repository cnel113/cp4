import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { useState, useEffect, useRef} from 'react';

function DisplayPiece(props){
    
        const [displayPiece, setDisplayPiece] = useState({});
        const [error, setError] = useState("");
        

        function fetchDisplayPiece() {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.displayPieceID;//props.displayPieceID.current
            const response =  axios.get(url);
            return response;
        }
        
        
         const handleDisplayPiece = async() => { 
                try {
                    
                    fetchDisplayPiece().then (
                        (response) => {
                            console.log(response);
                            
                             if (response.data.artistDisplayName === "") {
                                response.data.artistDisplayName = "Artist unknown";
                            }
                
                            if (response.data.primaryImageSmall === "") {
                                response.data.primaryImageSmall = "Image unavailable";
                            }
                            
                            if (response.data.title === "") {
                                response.data.title = "No title";
                            }
                            
                            if (response.data.culture === "") {
                                response.data.culture = "culture unknown";
                            }
                            
                            if (response.data.city === "") {
                                response.data.city = "city unknown";
                            }
                            
                            if (response.data.country === "") {
                                response.data.country = "country unknown";
                            }
                            
                            if (response.data.objectDate === "") {
                                response.data.objectDate = "date unknown";
                            }
                            
                            setDisplayPiece(response);
                            
                            return response;
                        }
                    );
                }
                
                catch(error) {
                    setError("error retrieving art piece" + error);
                }
            };
            

        function sendDisplayPiece() {
            return displayPiece;
        }    
        
       useEffect(() => { 
            handleDisplayPiece();
        }, [props.displayPieceID]);
        
         useEffect(() => { 
            sendDisplayPiece();
        }, [props.callback]);
        
        return (
           <div>
           {error}
                {displayPiece.data  ? <p className="artist">{displayPiece.data.artistDisplayName}</p> : <p> Artist Name: loading </p>}
                {displayPiece.data ? <img className="artImg"src={displayPiece.data.primaryImageSmall}/> : <p> Art Image: loading </p>}
                {displayPiece.data  ? <p className="description">{displayPiece.data.title}</p> : <p> Artwork Name: loading </p>}
                {displayPiece.data  ? <p className="culture">{displayPiece.data.culture}, created in {displayPiece.data.city}, {displayPiece.data.country} in the years {displayPiece.data.objectDate}</p> : <p> Artwork Details: loading </p>}
                
            </div> 
        ); // {(displayPiece.data.primaryImage === "Image unavailable")? <p>Image unavailable</p> : <p></p>}
        
    }
    
    export default DisplayPiece;