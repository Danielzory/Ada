import {useEffect, useState} from 'react'

const CicloDeVida = () => {
    //constructor
    const [incremento, setIncremento] = useState(0)
    console.log('Constructor')

const funcaoUnmount = () => console.log('UnMount')

const incrementar = () => setIncremento((state) => state +1)

    useEffect(()=>{
        console.log('Banana DidMount')
        return funcaoUnmount;
    },[]);

    useEffect(()=>{
        incrementar()
    },[])

    useEffect(()=>{
        console.log('Update!!', incremento)
    },[incremento]);


    //render (return)
    return <><h1>CicloDeVida</h1></>
    //Didmount
}

export {CicloDeVida}