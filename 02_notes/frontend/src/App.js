import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
