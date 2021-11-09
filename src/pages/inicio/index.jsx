import "./style.css"
import {useParams, useHistory} from "react-router-dom"

function Inicio({usuarios}){
    const history = useHistory()
    const params = useParams()
    const user = usuarios.find((item)=> item.nameUser === params.nameUser)
    return (
        <div>
            <p>Olá, {user.name}</p>
            <p>E-mail: {user.email}</p>
            <p>Usuário: {user.nameUser}</p>
            <p>Senha: {"*".repeat(user.senha.length)}</p>
            <button onClick={()=> history.push("/")} className="button">Sair</button>
        </div>
    )

}

export default Inicio;