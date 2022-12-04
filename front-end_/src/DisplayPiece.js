import axios from 'axios';
import { useState, useEffect} from 'react';

function DisplayPiece(props){
    
        const [displayPiece, setDisplayPiece] = useState({});
        const [error, setError] = useState("");
        

        function fetchDisplayPiece() {
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.displayPieceID;
            const response =  axios.get(url);
            return response;
        }
        
        
         const handleDisplayPiece = async() => { 
            try {
               fetchDisplayPiece().then (
                    (response) => {
                        console.log(response);
                        if (response.data.artistDisplayName === "") {
                            response.data.artistDisplayName = "unknown";
                        }
                
                        if (response.data.primaryImageSmall === "") {
                                response.data.primaryImageSmall = "Image unavailable";
                        }
                    
                        if (response.data.title === "") {
                            response.data.title = "None available";
                        }
                            
                        if (response.data.culture === "") {
                            response.data.culture = "(culture unknown)";
                        }
                            
                        if (response.data.city === "") {
                            response.data.city = "(city unknown)";
                        }
                            
                        if (response.data.country === "") {
                            response.data.country = "(country unknown)";
                        }
                        
                        if (response.data.objectDate === "") {
                            response.data.objectDate = "(date unknown)";
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
            
        
        const addSave = async() => { 
            try {
                await axios.post("/api/saved", {artID: props.displayPieceID, name: displayPiece.data.title, artist: displayPiece.data.artistDisplayName, imgURL: displayPiece.data.primaryImageSmall});
            }
            catch(error) {
                setError("Error saving item " + error);
            }
        };  
        
       useEffect(() => { 
            handleDisplayPiece();
        }, [props.displayPieceID]);
        
         useEffect(() => { 
             console.log("trying to save item in Display Piece");
             console.log("number of saved items" + props.numSaved);
            if (props.numSaved != 0) {
                addSave();
            }
        }, [props.numSaved]);
        
        return (
           <div className="displayPiece">
                {displayPiece.data ? <img className="artImg"src={displayPiece.data.primaryImageSmall} alt="art piece from the Met"/> : <p> Art Image: loading </p>}
                <div className="artInfo">
                    {displayPiece.data  ? <p className="artist">Artist: {displayPiece.data.artistDisplayName}</p> : <p> Artist Name: loading </p>}
                    {displayPiece.data  ? <p className="title">Title: {displayPiece.data.title}</p> : <p> Artwork Name: loading </p>}
                    {displayPiece.data  ? <p className="description">{displayPiece.data.culture}, created in {displayPiece.data.city}, {displayPiece.data.country} in {displayPiece.data.objectDate}</p> : <p> Artwork Details: loading </p>}
                </div> 
            </div> 
        ); 
        
    }
    
    export default DisplayPiece;