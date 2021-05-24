const { Link } = require("react-router-dom");

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="header">NC-NEWS</h1>
      </Link>
    </div>
  );
};

export default Header;
