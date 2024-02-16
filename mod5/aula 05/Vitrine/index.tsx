import { useEffect, useState } from "react"

type Film ={}


const Vitrine = () => {

    const [films, setFilms] = useState<Film[]>([])

   
    useEffect(()=>{
        const responde = fetch('https://ghibliapi.vercel.app', {method: 'GET'})
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=> {
            console.error(error)
        })
        
    },[])

    




    return(
        <>
        
        <h1>Vitrine</h1>
        
        </>
    )
}