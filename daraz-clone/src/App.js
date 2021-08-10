import "./App.css";
import Header from "./components/pages/Header/Header";
import Home from "./components/pages/Body/Home";
import Footer from "./components/pages/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route to="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
