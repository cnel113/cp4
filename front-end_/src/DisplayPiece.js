import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function DisplayPiece(props){
    
        const [displayPiece, setDisplayPiece] = useState({});
        const [error, setError] = useState("");

    
        if (props.artpiece.data.artistDisplayName === "") {
            props.artpiece.data.artistDisplayName = "Artist unknown";
        }
        
        if (props.artpiece.data.primaryImage === "") {
            props.artpiece.data.primaryImage = "Image unavailable";
        }
        
        //const displayPieceID = useRef(0);
        
         /*const fetchDisplayPiece = async() => {  //    function fetchDisplayPiece() {
                try {
                    if (props.displayPieceID.current === 0) {
                        //await setDisplayPieceID("1000");
                        props.displayPieceID.current = 1000;
                    }
                   
                    const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.displayPieceID.current;
                    const response = await axios.get(url);
                    const str = JSON.stringify(response);
                    
                    console.log("specific object response" + str);
                    await setDisplayPiece(response);
                    props.updatePiece();
                    const str2 = JSON.stringify(displayPiece);
                    console.log("display piece " + str2);
                    return(response);
                }
                catch(error) {
                    setError("error retrieving art piece" + error);
                }
            }
            */
        
        console.log("In display piece component");
        console.log(props);
        
        console.log("Inside use effect");
        
       useEffect(() => { 
            if (props.pieceUpdated) {
                console.log("Inside updating piece");

                //setPieceUpdated(false);
            }
            
            //fetchDisplayPiece();
        }, [props.displayPieceID.current]);//pieceUpdated
        
        
        return (
           <div>
                <p className="artist">{props.artpiece.data.artistDisplayName}</p>
                <img className="artImg"src={props.artpiece.data.primaryImage}/>
            </div> 
        );
        
        /*displayPiece.data.artistDisplayName */
   
    }
    
    export default DisplayPiece;
    
    /*
     <p className="artist">{props.artpiece.data.artistDisplayName}</p>
                <img className="artImg"src={props.artpiece.data.primaryImage}/>
                */
    
    /*
         return (
            <div className='artpiece'>
                <img src={displayPiece.data.primaryImage}/>
                <p> Artist: {displayPiece.data.artistDisplayName} </p>
            </div>
        );
        */