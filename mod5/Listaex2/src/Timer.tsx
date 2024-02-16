import { useState, useEffect } from 'react'
import './App.css'

const Timer: React.FC = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    

    useEffect(()=>{
        let intervalId = 0;
        
        if (isRunning){
            intervalId = setInterval (()=>{
                setSeconds((prevSeconds)=> {
                    if(prevSeconds === 59){
                        setMinutes((prevMinutes) =>  prevMinutes + 1)
                        return 0
                    }else{
                        return prevSeconds +1
                    }
                })
            }, 1000) 
        }

        return () => clearInterval(intervalId)
    }, [isRunning])

    const startTimer = () => {
        setIsRunning(true)
    }

    const pauseTimer = () => {
        setIsRunning(false)
    }
    const resetTimer = () => {
        setSeconds(0)
        setMinutes(0)
        setIsRunning(false)

    }
   
    return (
        <>
        <h1>Cronometro</h1>
        <div className='crono'>
            <div><p>Tempo: {minutes / 2} Minutos</p></div>
            <div><p>Tempo: {seconds} Segundos</p></div>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
        </>
    )
}

export {Timer}