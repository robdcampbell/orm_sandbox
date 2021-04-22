import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route />
        <Route path="*" />
      </Switch>
    </Router>
  );
}

export default App;
