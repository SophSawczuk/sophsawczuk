import './App.css';
import Nav from './Components/nav';
import { Route, Switch } from "react-router-dom";
import Holis from './Components/holis.jsx'
import Holis2 from './Components/holis2.jsx';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Holis/>
        </Route>
        <Route path="/contacto">
          <Holis2/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
