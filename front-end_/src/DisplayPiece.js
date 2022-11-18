import React from "react";
import ReactDOM from "react-dom";

function DisplayPiece(props){
    
        //const [displayPiece, setDisplayPiece] = useState({});
        //const str = JSON.stringify(displayPiece);
        
       // fetchDisplayPiece();
        //console.log("In renderDisplayPiece");
        //console.log("Displace Piece" + str);
        
        return (
            <div>
                <p>hello{props.artpiece.data.artistDisplayName}</p>
                <img src={props.artpiece.data.primaryImage}/>
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