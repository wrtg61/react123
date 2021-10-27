import React from 'react';
import './Button.css';

type buttonType ={
    type: any;
    children: any;
}

export const Button:React.FC<buttonType>= ({type, children}) =>{
    return(
        <>
        <button type={type}>{children}</button>
        </>
    )
}