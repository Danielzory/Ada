import { Link } from "react-router-dom"
const Contact = () =>{


    return (
        <>
        <h1>Contact Page</h1>
        <Link to={'/about'}>About</Link>
        <br />
        <Link to={'/'}>Home</Link>
        </>
    )
}

export {Contact}