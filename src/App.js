import { Route, Switch } from "react-router";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/articles/topics/:topic">
          <Home />
        </Route>
        <Route exact path="/articles/:article_id">
          <Article />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
