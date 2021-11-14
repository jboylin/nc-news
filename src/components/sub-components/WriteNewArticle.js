import { useContext, useState } from "react";
import { postArticle } from "../../util/api";
import { UserContext } from "../context/user";

const WriteNewArticle = ({ setArticles }) => {
  const { user } = useContext(UserContext);
  const starterArticle = {
    username: user.username,
    title: "",
    body: "",
    topic: "",
  };

  const [article, setArticle] = useState(starterArticle);

  const writeArticle = (event) => {
    event.preventDefault();
    postArticle(article).then((data) => {
      setArticles((currArticles) => {
        return [data.article, ...currArticles];
      });
      setArticle(starterArticle);
    });
  };

  return (
    <div className='post__container'>
      <h1 className='post__title'>Post Article</h1>
      <form className="post__form" onSubmit={writeArticle}>
        <label htmlFor="post__title"
               className='post__title'>
          title...
          <input
            className="form__input"
            id="post__title"
            type="text"
            required
            value={article.title}
            onChange={(event) => {
              setArticle((articles) => {
                return { ...articles, title: event.target.value };
              });
            }}
          ></input>
        </label>
        <label htmlFor="post__body"
               className='post__title'>
          body...
          <input
            className="form__input"
            id="post__body"
            type="text"
            required
            value={article.body}
            onChange={(event) => {
              setArticle((articles) => {
                return { ...articles, body: event.target.value };
              });
            }}
          ></input>
        </label>
        <label htmlFor="post__topic"
               className='post__title'>
          topic...
          <input
            className="form__input"
            id="post__topic"
            type="text"
            required
            value={article.topic}
            onChange={(event) => {
              setArticle((articles) => {
                return { ...articles, topic: event.target.value };
              });
            }}
          ></input>
        </label>
        <button className='post__button'>Submit</button>
      </form>
    </div>
  );
};

export default WriteNewArticle;
