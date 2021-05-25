import { useContext } from "react";
import { UserContext } from "./context/user";
const { Link } = require("react-router-dom");
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Link to="/home">
        <h1 className="header">NC-NEWS</h1>
      </Link>
      <Link to="/">
        <h2 className="header__username">{user.username}</h2>
      </Link>
    </div>
  );
};

export default Header;
