import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.tsx'

const Router =()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export {Router}