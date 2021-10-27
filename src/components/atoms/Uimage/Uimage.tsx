import React from "react";

type uimageType={
    children: any;
}

export const Uimage:React.FC<uimageType> = ({children}) =>{
    return (
        <>
        <p>{children}</p>
        </>
    )
}