import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { fetchTopics } from "../util/api";

import './styles/Nav.css'

const Nav = () => {
  const [topics, setTopics] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="navbar__container">
      <nav className="navbar">
      <button className="dropbtn">Dropdown 
      👉
      </button>
      <div className='navbar__topics'>
        {topics.map((topic) => {
          return (
            <Link
            className="navbar__topic"
            key={topic.slug}
            to={`/articles/topics/${topic.slug}`}
            >
              {topic.slug}
            </Link>
          );
        })}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
