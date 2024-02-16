import { useState, useEffect } from 'react'
import './App.css'

interface ApiDado {
    userId: number;
    title: string
}

function FatchData (){

    const [apiDado, setApiDado] = useState<ApiDado>({userId: 0, title:''})  
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setApiDado(json)
            setLoading(false)
        })
       
    }, [])


    return (

        <>  
        <h1>Exercício 01, 02, 03 (useEfect)</h1>

        <div>
            {loading ? (
                <p className='loading'>Loading...</p>
            ): (
                <>
                <p>User ID:  {apiDado.userId}</p>
                <p>Title: {apiDado.title}</p>
                </>
            )}
        </div>

        </>
    )
}

export {FatchData}