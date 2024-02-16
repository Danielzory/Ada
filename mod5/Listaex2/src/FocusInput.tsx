import { useState, useEffect, useRef } from 'react'
import './App.css'

const FocusInput = () => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(1)
    const [cpf, setCpf] = useState('')
    const [click, setClick] = useState(false)

    const changeStatusClick = () =>{
        setClick(true)
    }

    const focarRef = useRef();

    useEffect(()=>{
        if(click){
            focarRef.current.focus() 
        }
    },[click])


    return(
        <>
         <h1>Exercício 01, 02, 03 (useRef)</h1>
         <br />
        <button onClick={changeStatusClick}>Clique aqui{click}</button>
        <br />
        <div>
            <input ref={focarRef} type='text' value={nome} placeholder='Seu nome aqui' />
            <input type="number" value={cpf} placeholder='CPF'/>
            <input type="number" value={idade} placeholder='Sua idade aqui' />
         </div>
        

        <h3>Olá {nome}, seu CPF é: {cpf} e você tem {idade} anos de idade</h3>

        </>
    )

}

export{FocusInput}