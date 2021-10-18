import { Route, Switch } from "react-router";
import "./App.css";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Login from "./components/Login";
import { UserContext } from "./components/context/user";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ username: "grumpy19" });
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Articles />
          </Route>
          <Route exact path="/articles/topics/:topic">
            <Articles />
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
