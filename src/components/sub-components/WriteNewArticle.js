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
    <>
      <h1>Post Article</h1>
      <form className="article__form" onSubmit={writeArticle}>
        <label htmlFor="article_title">
          title...
          <input
            className="form__input"
            id="article_title"
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
        <label htmlFor="article_body">
          body...
          <input
            className="form__input"
            id="article_body"
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
        <label htmlFor="article_topic">
          topic...
          <input
            className="form__input"
            id="article_topic"
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
        <button>Submit</button>
      </form>
    </>
  );
};

export default WriteNewArticle;
