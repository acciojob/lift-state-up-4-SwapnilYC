import React from "react";
import ReactDOM from "react-dom";

function Child({list, deleteChildHandler}) {
return(
    <div className="child">
        <ul>
        {list &&
            (list?.map( (item, i) => (
                <> 
                <li className="child li" id={i}>{item.ItemName} - {item.ItemPrice}</li> <button onClick={()=> deleteChildHandler(i)}>Remove</button>
                </>
            )))
        }
        </ul>
    </div>
);
}

export default Child;