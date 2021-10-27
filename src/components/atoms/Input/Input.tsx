import React from 'react';
import './Input.css';

type inputType={
    type: any;
    name: string;
}

export const Input:React.FC<inputType> = ({type, name}) =>{
    return (
        <>
        <input type={type} name={name}/>
        </>
    )
}