import BarraLateralComponent from "./BarraLateralComponent/BarraLateralComponent" 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./reset.css"
import FooterComponent from "./FooterComponent/FooterComponent"
import LoginComponent from "./LoginComponent/LoginComponent"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/login">
          <LoginComponent/>
        </Route>
        <Route path="/home">
        </Route>
        <Route path="/newProject">
        </Route>
      </Switch>
      <BarraLateralComponent/>
      <FooterComponent/>
    </Router>
  );
}

export default App;
