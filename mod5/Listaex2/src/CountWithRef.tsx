import { useEffect, useRef, useState } from "react"



const CountWithRef = () =>{
    const [count, setCount] = useState(0)
    const cttRef = useRef(0)

    

    useEffect(()=>{
        cttRef.current = count;
    })


    return(
        <>
        <button onClick={()=>setCount(count + 1)}>Incrementar</button>
        <button onClick={()=>setCount(count - 1)}>Decrementar</button>
        <h3>Valor anterior do contador (useRef): {cttRef.current} </h3>
        <h3>Valor atual do contado: {count}</h3>
        </>
    )
}

export {CountWithRef}