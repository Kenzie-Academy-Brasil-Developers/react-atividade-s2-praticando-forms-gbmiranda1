import "./style.css"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory }  from 'react-router-dom'

function Entrar({usuarios}){
    const history = useHistory();

    const formSchema = yup.object().shape({
        nameUser: yup.string().required("Usuário obrigatório"),
        senha: yup.string().required("Senha obrigatória"),
    })
    
      const { register, 
              handleSubmit, 
              formState: { errors },
      } = useForm({
        resolver:yupResolver(formSchema),
      })
    
    const onSubmitFunction = data => {
        if(usuarios.filter((item)=>item.nameUser ===data.nameUser && item.senha===data.senha).length===1){
            history.push(`/inicio/${data.nameUser}`)
        }else{
            history.push("/cadastrar")
        }
    }


    return(
        <div>
            <form className="forms" onSubmit={handleSubmit(onSubmitFunction)}>
                <h1 className="h1-entrar">Entrar</h1>
                <input placeholder="Usuário" type="text" {...register("nameUser")}/>
                <p className="error">{errors.nameUser?.message}</p>
                <input placeholder="Senha" type="password" {...register("senha")} />
                <p className="error">{errors.senha?.message}</p>
                <button type="submit" className="button">Entrar</button>
                <button onClick={() => history.push("/cadastrar")} className="button cadastro">Cadastrar</button>
            </form>

            
        </div>
    )
}

export default Entrar;