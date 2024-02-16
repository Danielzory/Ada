import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Timer } from './Timer'
import { FatchData } from './FatchData'
import { FocusInput } from './FocusInput'
import { CountWithRef } from './CountWithRef'
import { MessureElement } from './MessureElemnt'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

const handleStepChange = (e) =>{
  const newStep = parseInt(e.target.value, 10)
  setStep(isNaN(newStep) ? 1 : newStep);
}  
const handleNameChange = (e) =>{
  const newName = e.target.value
  setName(newName !== '' ? newName: 'Sem nome digitado');
} 
const handleAgeChange = (e) =>{
  const newAge = parseInt(e.target.value, 10)
  setAge(isNaN(newAge) ? 1 : newAge);
} 

  return (
    <>
    
    <img src={reactLogo} className="logo react" alt="React logo" />
    <h1>Exercício 01, 02, 03 (useState)</h1>
    <div><p>Contator {count}</p></div>
    <div><p>Step {step}</p></div>
    <div><p>Nome: {name}</p></div>
    <div><p>Idade: {age}</p></div>
    <button onClick={()=>setCount(count + step)}>Incrementar</button>
    <button onClick={()=>setCount(count - step)}>Decrementar</button>
    <br />
    <label>
      Step: 
      <input type="number" value={step} onChange={handleStepChange} />
    </label>
    <label>
      Name: 
      <input type="text" value={name} onChange={handleNameChange} />
    </label>
    <label>
      Age: 
      <input type="number" value={age} onChange={handleAgeChange} />
    </label>
    <FatchData/>
    <Timer />
    <FocusInput />
    <CountWithRef />
    <MessureElement />
    </>
  )

}

export {App};
