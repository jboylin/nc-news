import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById, fetchComments } from "../util/api";
import comment_icon from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/159777.png";

const Article = () => {
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  let { article_id } = useParams();

  console.log("HEllo :)");

  useEffect(() => {
    fetchArticleById(article_id).then((body) => {
      setArticle(body);
      setIsArticleLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    fetchComments(article_id).then((body) => {
      setComments(body);
      setIsCommentsLoading(false);
    });
  }, [article_id]);

  if (isArticleLoading || isCommentsLoading) return <p>Loading</p>;

  return (
    <>
      <h1>{article.title}</h1>
      <h2>{article.topic}</h2>
      <h3>{article.author}</h3>
      <h4>{article.created_at}</h4>
      <p>{article.body}</p>
      <h5>
        <img className="comment__icon" src={comment_icon} alt="comment_icon" />
        {article.comment_count}
      </h5>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h6>{comment.author}</h6>
              <p>{comment.body}</p>
              <p>{comment.votes}</p>
              <p>{comment.created_at}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Article;
