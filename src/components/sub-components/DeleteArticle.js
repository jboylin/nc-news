import { Redirect } from "react-router";
import { deleteById } from "../../util/api";

const DeleteArticleById = ({ article, setArticles }) => {
  const id = article.article_id;
  const removeArticle = () => {
    const type = "articles";
    deleteById(type, id).then(() => {
      <Redirect to="/Home" />;
    });
  };

  return <button onClick={() => removeArticle()}>Delete</button>;
};

export default DeleteArticleById;
