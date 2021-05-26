import { Route, Switch } from "react-router";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { UserContext } from "./components/context/user";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ username: "grumpy19" });
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/articles/topics/:topic">
            <Home />
          </Route>
          <Route exact path="/articles/:article_id">
            <Article />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
