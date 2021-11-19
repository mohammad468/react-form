import "./styles/custom.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* <SignUp />
      <Login /> */}
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
