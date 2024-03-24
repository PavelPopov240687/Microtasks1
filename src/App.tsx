import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";


function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
            {message: 'message6'}
        ]
    )
    let [title, setTitle] = useState("")

    const addTitle = (title: string) => {

        let newMessage = {message: title};
        setMessage([newMessage, ...message])
        setTitle('')
    }
    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <Button name={"+"} callback={() => {
                addTitle(title)
            }}/>
            {/*<FullInput*/}
            {/*    addTitle={addTitle}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>

                )
            })}
        </div>
    );
}

export default App;

