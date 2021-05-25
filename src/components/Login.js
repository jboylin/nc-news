import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../util/api";
import { UserContext } from "./context/user";
import user_profile_pic from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/Default-Profile-Picture-Download-PNG-Image.png";

const Login = () => {
  const [users, setUsers] = useState();
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
            <li>
              <img
                className="profile__picture"
                src={user_profile_pic}
                alt="default_profile_pic"
              />
              <button
                onClick={() => {
                  setUser(user);
                }}
              >
                <h3>{user.username}</h3>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Login;
