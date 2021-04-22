import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import UserAdded from "./pages/UserAdded";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user-added" component={UserAdded} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
