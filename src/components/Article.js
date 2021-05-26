import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../util/api";
import Comments from "./Comments";
import comment_icon from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/159777.png";
import VoteOnArticle from "./sub-components/Vote";
const Article = () => {
  const [article, setArticle] = useState();
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [commentCounter, setCommentCounter] = useState(0);

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
      <VoteOnArticle article={article} />
      <h5>
        <img className="comment__icon" src={comment_icon} alt="comment_icon" />
        {parseInt(article.comment_count) + commentCounter}
      </h5>
      <Comments
        commentCounter={commentCounter}
        setCommentCounter={setCommentCounter}
      />
    </>
  );
};

export default Article;
