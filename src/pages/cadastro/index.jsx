import "./style.css"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory }  from 'react-router-dom'

function Cadastrar({setUsers, usuarios}){

    const history = useHistory();

    const formSchema = yup.object().shape({
        nameUser: yup.string().required("Usuário obrigatório"),
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        senha: yup.string().required("Senha obrigatória"),
        confirmacaoSenha: yup.string().oneOf([yup.ref('senha'), null], "Senhas não coincidem"),
        checkbox: yup.bool().oneOf([true], "Seleção Obrigatória")
    })
    
      const { register, 
              handleSubmit, 
              formState: { errors },
      } = useForm({
        resolver:yupResolver(formSchema),
      })
    
      const onSubmitFunction = data => {
        if(usuarios.filter((item)=> item.nameUser === data.nameUser).length === 0){
          setUsers([...usuarios, data])
          history.push("/")
        }
      }


    return (
        <div>
          
          <form className="forms" onSubmit={handleSubmit(onSubmitFunction)}>
            <h1 className="cadastro-h1">Cadastre-se</h1>
              <input placeholder="Nome de usuário" {...register("nameUser")}/>
              <p className="error">{errors.nameUser?.message}</p>
              <input placeholder="Nome Completo" {...register("name")}/>
              <p className="error">{errors.name?.message}</p>
              <input placeholder="Endereço de E-mail" {...register("email")}/>
              <p className="error">{errors.email?.message}</p>
              <div className="senha">
                <div className="error-senha">
                  <input type="password" className="senha-input" placeholder="Senha *" {...register("senha")}/>
                  <p className="error">{errors.senha?.message}</p>
                </div>
                <div className="error-senha">
                  <input type="password" className="senha-input" placeholder="Confirme Sua Senha *" {...register("confirmacaoSenha")}/>
                  <p className="error">{errors.confirmacaoSenha?.message}</p>
                </div>
              </div>
              <div className="checkbox">
                <div className="checkbox-internal">
                  <input type="checkbox" id="salvar" {...register("checkbox")}/>
                  <label for="salvar">Eu aceito os termos de uso da aplicação</label>
                </div>
                <p className="error">{errors.checkbox?.message}</p>
              </div>
              <button type="submit" className="button">Cadastrar-se</button>
          </form>
        </div>
    )
}

export default Cadastrar;