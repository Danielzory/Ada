import { RedirectHomeAfterDelay } from "./RedirectHome"

const NotFound: React.FC= () =>{
    
    return (
        <>
        <h1>Erro 404, página não encontrada!</h1>
        <RedirectHomeAfterDelay />
        </>
    )
}

export {NotFound}