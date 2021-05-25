import { useEffect, useState } from "react";
import { fetchArticles } from "../util/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import comment_icon from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/159777.png";
import up_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/up_arrow.png";
import down_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/down_arrow.png";
const Articles = () => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
  let { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic]);

  if (loading) return <p>Loading...</p>;
  return (
    <ul className="article">
      {articles.map((article) => {
        return (
          <div className="article__body">
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h1>{article.title}</h1>
              </Link>
              <h2>{article.topic}</h2>
              <h3>{article.author}</h3>
              <h4>{article.created_at}</h4>
              <h4>
                <img
                  className="comment__icon"
                  src={comment_icon}
                  alt="comment_icon"
                />
                {article.comment_count}
              </h4>
              <h5>
                votes:{" "}
                <img className="vote__icon" src={up_arrow} alt="upvote" />{" "}
                {article.votes}{" "}
                <img className="vote__icon" src={down_arrow} alt="downvote" />
              </h5>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Articles;
