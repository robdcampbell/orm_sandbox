import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Test from "./pages/Test";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/test" component={Test} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
