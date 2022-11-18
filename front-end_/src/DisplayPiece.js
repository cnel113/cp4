import React from "react";
import ReactDOM from "react-dom";

function DisplayPiece(props){
    
        if (props.artpiece.data.artistDisplayName === "") {
            props.artpiece.data.artistDisplayName = "Artist unknown";
        }
        
        if (props.artpiece.data.primaryImage === "") {
            props.artpiece.data.primaryImage = "Image unavailable";
        }
        
        return (
            <div>
                <p className="artist">{props.artpiece.data.artistDisplayName}</p>
                <img className="artImg"src={props.artpiece.data.primaryImage}/>
            </div>
        );
   
    }
    
    export default DisplayPiece;
    
    /*
         return (
            <div className='artpiece'>
                <img src={displayPiece.data.primaryImage}/>
                <p> Artist: {displayPiece.data.artistDisplayName} </p>
            </div>
        );
        */