import './App.css';
import { Route, Switch} from "react-router-dom";
import Cadastrar from "./pages/cadastro"
import { useState } from 'react';
import Entrar from './pages/entrar';
import Inicio from './pages/inicio';

function App() {
  const [usuarios, setUsers] = useState([])
 
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path="/">
          <Entrar usuarios={usuarios}></Entrar>
        </Route>
        <Route exact path="/cadastrar">
          <Cadastrar usuarios={usuarios} setUsers={setUsers}></Cadastrar>
        </Route>
        <Route exact path="/inicio/:nameUser">
          <Inicio usuarios={usuarios}></Inicio>
        </Route>
      </Switch>
      </header>
    </div>
  );
}

export default App;
