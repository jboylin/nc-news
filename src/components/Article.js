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
      <h1 className='S_article__title'>{article.title}</h1>
      <h3 className='S_article__topic'>{article.topic}</h3>
      <h3 className='S_article__author'>{article.author}</h3>
      <p className='S_article__body'>{article.body}</p>
      <h4 className='S_article__date'>{article.created_at}</h4>
      <div className='S_article__vote'>
        <Vote commentOrArt={article} id={article.article_id} type={"articles"} />
      </div>
      <div className='S_article__delete'>
        <DeleteArticleById article={article} />
      </div>
      <div className='S_article__comments'>
        <img className="comment__icon" src={comment_icon} alt="comment_icon" />
        {parseInt(article.comment_count) + commentCounter}
      <Comments
        commentCounter={commentCounter}
        setCommentCounter={setCommentCounter}
        />
        </div>
    </div>
  );
};

export default Article;
