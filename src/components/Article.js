import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../util/api";
import Comments from "./Comments";
import comment_icon from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/159777.png";
import up_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/up_arrow.png";
import down_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/down_arrow.png";
const Article = () => {
  const [article, setArticle] = useState();

  const [isArticleLoading, setIsArticleLoading] = useState(true);

  let { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((body) => {
      setArticle(body);
      setIsArticleLoading(false);
    });
  }, [article_id]);

  if (isArticleLoading) return <p>Loading</p>;

  return (
    <>
      <h1>{article.title}</h1>
      <h2>{article.topic}</h2>
      <h3>{article.author}</h3>
      <h4>{article.created_at}</h4>
      <p>{article.body}</p>
      <h6>
        <img className="vote__icon" src={up_arrow} alt="upvote" />
        {article.votes}
        <img className="vote__icon" src={down_arrow} alt="downvote" />
      </h6>
      <h5>
        <img className="comment__icon" src={comment_icon} alt="comment_icon" />
        {article.comment_count}
      </h5>
      <Comments />
    </>
  );
};

export default Article;
