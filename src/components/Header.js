import { useContext } from "react";
import { UserContext } from "./context/user";
import Nav from "./Nav";

import './styles/Header.css'

const { Link } = require("react-router-dom");
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='header'>
      <Nav className="header__nav"/>
      <Link to="/home">
        <h1 className="header__title">NC-NEWS</h1>
      </Link>
      <Link to="/">
        <h2 className="header__username">{user.username}</h2>
      </Link>
    </div>
  );
};

export default Header;
