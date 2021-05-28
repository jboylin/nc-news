import { Redirect } from "react-router";
import { deleteById } from "../../util/api";

const DeleteArticleById = ({ article }) => {
  const article_id = article.article_id;
  const removeArticle = () => {
    const type = "articles";
    deleteById(type, article_id);
    <Redirect to="/" />;
  };

  return <button onClick={() => removeArticle()}>Delete</button>;
};

export default DeleteArticleById;
