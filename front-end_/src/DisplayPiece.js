import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { useState, useEffect} from 'react';

function DisplayPiece(props){
    
        const [displayPiece, setDisplayPiece] = useState({});
        const [error, setError] = useState("");
    
        function fetchAndSetDisplayPiece() {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.displayPieceID;//props.displayPieceID.current
            const response =  axios.get(url);
            //const str = JSON.stringify(response);
            return response;
        }
        
        
         const handleDisplayPiece = async() => { 
                try {
                    
                    fetchAndSetDisplayPiece().then (
                        (response) => {
                            console.log(response);
                            
                             if (response.data.artistDisplayName === "") {
                                response.data.artistDisplayName = "Artist unknown";
                            }
                
                            if (response.data.primaryImage === "") {
                                response.data.primaryImage = "Image unavailable";
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
        
       useEffect(() => { 
            
            handleDisplayPiece();
        }, [props.displayPieceID]);
        
        return (
           <div>
           {error}
                {displayPiece.data  ? <p className="artist">{displayPiece.data.artistDisplayName}</p> : <p> Artist Name: loading </p>}
                {displayPiece.data ? <img className="artImg"src={displayPiece.data.primaryImage}/> : <p> Art Image: loading </p>}
               

            </div> 
        ); // {(displayPiece.data.primaryImage === "Image unavailable")? <p>Image unavailable</p> : <p></p>}
        
    }
    
    export default DisplayPiece;