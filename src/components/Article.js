import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../util/api";
import Comments from "./Comments";
import comment_icon from "../images/159777.png";
import Vote from "./sub-components/Vote";
import DeleteArticleById from "./sub-components/DeleteArticle";
import "./styles/Article.css"
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
    <div className='article__container'>
      <h1 className='article__title'>{article.title}</h1>
      <h2 className='article__topic'>{article.topic}</h2>
      <h3 className='article__author'>{article.author}</h3>
      <h4 className='article__date'>{article.created_at}</h4>
      <p className='article__body'>{article.body}</p>
      <Vote commentOrArt={article} id={article.article_id} type={"articles"} />
      <DeleteArticleById article={article} />
      <h5 className='article__commentCount'>
        <img className="comment__icon" src={comment_icon} alt="comment_icon" />
        {parseInt(article.comment_count) + commentCounter}
      </h5>
      <Comments
        commentCounter={commentCounter}
        setCommentCounter={setCommentCounter}
      />
    </div>
  );
};

export default Article;
