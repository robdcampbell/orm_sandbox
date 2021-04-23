import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Test from "./pages/Test";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route path="/test" component={Test} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
