import React, { useState } from "react";
import ReactDOM from "react-dom";
import Child from "./Child"


function Parent() {
    let [list, setList] = useState([]);
    let [itemName, setItemName] = useState("");
    let [itemPrice, setItemPrice] = useState("");

    function childHandler() {
        let x = { "ItemName": itemName, "ItemPrice": itemPrice };
        setList([...list, x]);
    }

    function removeChild(index) {
        let y = list.filter((curr, i) => i !== index);
        setList(y);
    }

    return (
        <div className="parent ">
            <label>Item Name:</label> <input type="text" id="itemName" onInput={(e) => setItemName(e.target.value)} />
            <label>Item Price:</label> <input type="number" id="itemPrice" onInput={(e) => setItemName(e.target.value)} />
            <button>Add Item</button>
            <Child listHandler={list} deleteChildHandler={removeChild} />
        </div>
    );
}

export default Parent;