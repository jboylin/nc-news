import { useState } from "react";
import { Redirect } from "react-router";
import { deleteById } from "../../util/api";

const DeleteArticleById = ({ article }) => {
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const article_id = article.article_id;
  const removeArticle = () => {
    setDeleting(true);
    const type = "articles";
    deleteById(type, article_id).then(() => {
      setDeleting(false);
      setDeleted(true);
    });
  };

  if (deleting) return <h1>deleting...</h1>;

  if (deleted) return <Redirect to="/home" />;

  return <button onClick={() => removeArticle()}>Delete</button>;
};

export default DeleteArticleById;
