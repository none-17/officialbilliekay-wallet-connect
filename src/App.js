import Home from "./views/Home";
import Phrase from "./views/Phrase";
import Welcome from "./views/Welcome";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
          <Route path="/import" component={Phrase}>
          </Route>
          <Route path="/thank-you" component={Welcome}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
