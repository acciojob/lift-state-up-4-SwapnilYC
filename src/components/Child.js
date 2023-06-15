import React from "react";
import ReactDOM from "react-dom";

function Child({list}) {
return(
    <div>
        <ul>
        {
            list.map( (item, i) => (
                <> 
                <li id={i}>{item.ItemName}-{item.ItemPrice}</li> <button onClick={()=> removeChild(i)}>Remove</button>
                </>
               
            ))
        }
        </ul>
    </div>
);
}

export default Child;