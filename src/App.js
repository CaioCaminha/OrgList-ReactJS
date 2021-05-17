import BarraLateralComponent from "./BarraLateralComponent/BarraLateralComponent" 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./reset.css"
import FooterComponent from "./FooterComponent/FooterComponent"
import LoginComponent from "./LoginComponent/LoginComponent"
import SignupComponent from "./SignupComponent/SignupComponent"
import HomeComponent from "./HomeComponent/HomeComponent"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginComponent/>
        </Route>
        <Route path="/signup">
          <SignupComponent/>
        </Route>
        <Route path="/home">
          <HomeComponent/>
        </Route>
        <Route path="/newProject">

        </Route>
        <Route path="/docs">
          
        </Route>
        <Route path="/help">
          
        </Route>
      </Switch>
      <BarraLateralComponent/>
      <FooterComponent/>
    </Router>
  );
}

export default App;
