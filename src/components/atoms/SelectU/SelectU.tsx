import React from 'react';
import './SelectU.css';

type selectUType={
    children: any;
}

export const SelectU:React.FC<selectUType> = ({children}) =>{
    return (
        <>
        <p>{children}</p>
        </>
    )
}