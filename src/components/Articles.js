import { useEffect, useState } from "react";
import { fetchArticles } from "../util/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import comment_icon from "../images/159777.png";
import Vote from "./sub-components/Vote";
import WriteNewArticle from "./sub-components/WriteNewArticle";
const Articles = () => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();
  let { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic, order).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic, order]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <button
        onClick={() => {
          setOrder("desc");
        }}
      >
        recent
      </button>
      <button
        onClick={() => {
          setOrder("asc");
        }}
      >
        oldest
      </button>
      <WriteNewArticle setArticles={setArticles} />
      <ul className="article">
        {articles.map((article) => {
          return (
            <div key={article.article_id} className="article__body">
              <li>
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
                <Vote
                  commentOrArt={article}
                  id={article.article_id}
                  type={"articles"}
                />
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
