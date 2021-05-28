import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../util/api";
import { UserContext } from "./context/user";

const Login = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((body) => {
      setUsers(body);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <h1>Login</h1>
      <h2>Available Users</h2>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.username}>
              <img
                className="profile__picture"
                src={user.avatar_url}
                alt="profile_pic"
              />
              <Link to="/home">
                <button
                  onClick={() => {
                    setUser(user);
                  }}
                >
                  <h3>{user.username}</h3>
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Login;
