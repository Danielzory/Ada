import { useState, useEffect, useRef } from 'react'
import './App.css'


const MessureElement = () =>{

    const [largura, setLargura] = useState(0)
    const [largura2, setLargura2] = useState(0)

    const larguraRef = useRef(null)
    const larguraRef2 = useRef(null)
    
    useEffect(()=>{
        setLargura(larguraRef.current.offsetWidth) 
    },[])
    useEffect(()=>{
        setLargura2(larguraRef2.current.offsetWidth)
    },[])


    return(
        <>
        <div ref={larguraRef} className='divG'>DivG {largura} pixels de largura</div>
        <div ref={larguraRef2} className='divM'>DivM {largura2} pixels de largura</div>

        </>
    )
}

export{MessureElement}