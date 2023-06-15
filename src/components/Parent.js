import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Child from "./Child"


function Parent() {
    let [list, setList] = useState([]);
    let [itemName, setItemName] = useState("");
    let [itemPrice, setItemPrice] = useState("");

    function childHandler() {
        setList([...list, { "ItemName": itemName, "ItemPrice": itemPrice }]);
        setItemName("");
        setItemPrice("");
        console.log(list)
    }

    function removeChild(index) {
        let y = list.filter((curr, i) => i !== index);
        setList(y);
    }

    return (
        <div className="parent">
            <label>Item Name:</label> <input value={itemName} type="text" id="itemName" onInput={(e) => setItemName(e.target.value)} />
            <label>Item Price:</label> <input value={itemPrice} type="number" id="itemPrice" onInput={(e) => setItemPrice(e.target.value)} />
            <button onClick={()=>childHandler()}>Add Item</button>
            {/* <Child listHandler={list} deleteChildHandler={removeChild} /> */}
        </div>
    );
}

export default Parent;