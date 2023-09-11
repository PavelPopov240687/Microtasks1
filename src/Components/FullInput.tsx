import React, {ChangeEvent, useState} from 'react';
type FullInputPropsType={
    addTitle:(title:string)=>void

}
export const FullInput = (props:FullInputPropsType) => {
let[title,setTitle]=useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setTitle(event.currentTarget.value)
    };
const onClicButtonHandler=()=>{
    props.addTitle(title)
}
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClicButtonHandler}>+</button>
        </div>
    );
};

