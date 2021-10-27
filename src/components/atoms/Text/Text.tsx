import React from 'react';
import './Text.css';

type textType={
    children: any;
}

export const Text:React.FC<textType> = ({children}) =>{
    return (
        <>
        <p>{children}</p>
        </>
    )
}