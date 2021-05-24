import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../util/api";

const Article = () => {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let { article_id } = useParams();

  console.log("HEllo :)");

  useEffect(() => {
    fetchArticleById(article_id).then((body) => {
      setArticle(body);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <h1>{article.title}</h1>
    </>
  );
};

export default Article;
