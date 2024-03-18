import { Link, useParams } from "react-router-dom"


const UserProfile: React.FC = () =>{
    const {id} = useParams();
   
    console.log(id)
    return (
        <>
        <div>
            <h2>Perfil do Usuário</h2>
            <p>Informações do usuário com ID: {id}</p>
            <Link to={"/"}>Home</Link>
        </div>
        </>
    )
}

export {UserProfile}