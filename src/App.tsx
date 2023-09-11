import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./Components/FullInput";


function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const addTitle=(title:string)=>{
        console.log(title)
        let newMessage={message: title};
        setMessage([newMessage,...message])
    }
    return (
        <div className="App">
            {/*<div>*/}
            {/*  <input/>*/}
            {/*  <button>+</button>*/}
            {/*</div>*/}

            <FullInput
                addTitle={addTitle}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>

                )
            })}
        </div>
    );
}

export default App;

