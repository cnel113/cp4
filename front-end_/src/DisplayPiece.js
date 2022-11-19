import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { useState, useEffect} from 'react';

function DisplayPiece(props){
    
        const [displayPiece, setDisplayPiece] = useState({});
        const [error, setError] = useState("");
    
        //const displayPieceID = useRef(0);
    
        function fetchAndSetDisplayPiece() {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.displayPieceID;//props.displayPieceID.current
            const response =  axios.get(url);
            const str = JSON.stringify(response);
            //setDisplayPiece(response);
            //console.log("api repsonse " + str);
            return response;
        }
        
        
         const fetchDisplayPiece = async() => {  //    function fetchDisplayPiece() {
                try {
                    /*if (props.displayPieceID.current === 0) {
                        //await setDisplayPieceID("1000");
                        props.displayPieceID.current = 1000;
                    }
                   */
                   
                   /*if (props.displayPieceID === 0) {
                        //await setDisplayPieceID("1000");
                        props.displayPieceID = 1000;
                    }
                   
                   */
                   
                   /* const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.displayPieceID;//props.displayPieceID.current
                    const response = await axios.get(url);
                    const str = JSON.stringify(response); */
                    
                    fetchAndSetDisplayPiece().then (
                        (response) => {
                            console.log(response);
                            setDisplayPiece(response);
                            return response;
                        }
                    );
                    
                   /* console.log("specific object response" + str);
                    setDisplayPiece(response);
                    const str2 = JSON.stringify(displayPiece);
                    console.log("display piece " + str2);
                    */
                    
                    /*
                    
                     if (displayPiece.data.artistDisplayName === "") {
                        displayPiece.data.artistDisplayName = "Artist unknown";
                    }
        
                    if (displayPiece.data.primaryImage === "") {
                        displayPiece.data.primaryImage = "Image unavailable";
                    }
                    */
                    
                    //return(response);
                }
                
                catch(error) {
                    setError("error retrieving art piece" + error);
                }
            };
        
        /*console.log("In display piece component");
        console.log(props);
        
        console.log("Inside use effect");*/
        
        
        /*const handleSetDisplayPiece = async() => {
            // console.log("specific object response" + str);
            //let response = fetchDisplayPiece();
            
            /*setDisplayPiece(response);
            const str2 = JSON.stringify(displayPiece);
            console.log("display piece " + str2);*/
            
            /*const response = await fetchDisplayPiece(); 
            
            const responsedp = await setDisplayPiece(response);
    
                    
            if (displayPiece.data.artistDisplayName === "") {
                displayPiece.data.artistDisplayName = "Artist unknown";
            }
        
            if (displayPiece.data.primaryImage === "") {
                 displayPiece.data.primaryImage = "Image unavailable";
            }
        };
        */
        
        //fetchDisplayPiece().then(response => handleSetDisplayPiece(response));
        
       useEffect(() => { 
            
            fetchDisplayPiece();
            //handleSetDisplayPiece();
            //fetchAndSetDisplayPiece();
        }, [props.displayPieceID]);//props.displayPieceID.current
        
        
        
        return (
           <div>
           {error}
                {displayPiece.data  ? <p className="artist">{displayPiece.data.artistDisplayName}</p> : <p> artist unknown </p>}
                {displayPiece.data ? <img className="artImg"src={displayPiece.data.primaryImage}/> : <p> loading </p>}
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