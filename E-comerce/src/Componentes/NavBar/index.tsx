import './navBar.css'
import { Link } from 'react-router-dom'
import { IoPlanet } from "react-icons/io5";

const NavBar = () => {

    return (
        <>
            <div className="nav-container">
                <div className="nav">
                    <div className="logo-nav">
                    <IoPlanet />
                    </div>
                    <div className='site-name'>
                        <p>All For Tech</p>
                    </div>
                    <div className="login">
                        <Link to={'/signUp'}>Sign up</Link>
                        <Link to={'/login'}>Log in</Link>
                    </div>
                    </div>    
            </div>
        
        </>
    )
}

export {NavBar}