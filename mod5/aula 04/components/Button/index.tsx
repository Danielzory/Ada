import {FC, ReactNode, useState} from "react";

interface ButtonProps {
    children: ReactNode
    type?: HTMLButtonElement['type']
}

const Button:FC<ButtonProps> = ({children, ...props}) => {
    const [cont, setCont] = useState<number>(0)

    const handleClick = () =>{
        if(cont % 3 === 0){
            setCont(cont + 2)
        }else{
            setCont(cont + 1)
        }
    }

    return  <button type={props.type || 'button'} onClick={handleClick}> {children} {cont} </button>
    
};

export {Button}