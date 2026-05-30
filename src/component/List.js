"use client";
import {useState} from "react";
export default function List()
{
    const [text, setText] = useState("new");
    return(
        <div>
            <h1>New List Page</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Cherry</li> 
            </ul>
            <input value={text} onChange={function onchange(e){
                console.log(e.target.value);
                setText(e.target.value);}}/>
            <button onClick={function add(){
                console.log(text);
            }}>Click</button>
        </div>
    );
}