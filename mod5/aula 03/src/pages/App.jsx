import React from "react"
import { Button } from "../components//Button"

const App = () => {
    return <>
     <h1>Automatização de componentes</h1>
     <Button type="clear" data="fruta">Clique aqui</Button>
     </>
}

const fruta = "banana"

export { App, fruta }