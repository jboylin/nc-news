import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { fetchTopics } from "../util/api";

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
    <nav className="navbar">
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
    </nav>
  );
};

export default Nav;
