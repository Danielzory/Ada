import {FC, ReactNode, useState} from "react";

interface ButtonBooleanProps {
    children: ReactNode
    type?: HTMLButtonElement['type']
}

const ButtonB:FC<ButtonBooleanProps> = ({children, ...props}) => {
    const [on, setOn] = useState(false)

    const handleClick = () =>{
        setOn(state => !state)
    }

    return  <button type={props.type || 'button'} onClick={handleClick}> {children} {String(on)} </button>
    
};

export {ButtonB}