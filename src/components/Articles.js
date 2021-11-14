import { useEffect, useState } from "react";
import { fetchArticles } from "../util/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import comment_icon from "../images/159777.png";
import Vote from "./sub-components/Vote";
import WriteNewArticle from "./sub-components/WriteNewArticle";
import './styles/Articles.scss'
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();
  const [sort_by, setSort] = useState();
  let { topic } = useParams();



  //3D Workings.

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", moveCamera);
    window.addEventListener("mousemove", moveCameraAngle);
  });

  const perspectiveOrigin = {
    x: parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--scenePerspectiveOriginX"
      )
    ),
    y: parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--scenePerspectiveOriginY"
      )
    ),
    maxGap: 10
  };

  function moveCameraAngle(event) {
    const xGap =
      (((event.clientX - window.innerWidth / 2) * 100) /
        (window.innerWidth / 2)) *
      -1;
    const yGap =
      (((event.clientY - window.innerHeight / 2) * 100) /
        (window.innerHeight / 2)) *
      -1;
    const newPerspectiveOriginX =
      perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
    const newPerspectiveOriginY =
      perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;
  
    document.documentElement.style.setProperty(
      "--scenePerspectiveOriginX",
      newPerspectiveOriginX
    );
    document.documentElement.style.setProperty(
      "--scenePerspectiveOriginY",
      newPerspectiveOriginY
    );
  }

  function moveCamera() {
    document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
  }
  
  useEffect(() => {
    fetchArticles(topic, order, sort_by).then((articles) => {
      setArticles(articles);
      setSceneHeight();
      setLoading(false);
    });
    function setSceneHeight() {
      const numberOfItems = articles.length; // Or number of items you have in `.scene3D`
      const itemZ = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
      );
      const scenePerspective = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--scenePerspective"
        )
      );
      const cameraSpeed = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
      );
    
      const height =
        window.innerHeight +
        scenePerspective * cameraSpeed +
        itemZ * cameraSpeed * numberOfItems;
    
      // Update --viewportHeight value
      document.documentElement.style.setProperty("--viewportHeight", height);
    }
  }, [topic, order, sort_by, articles.length]);
  
  

  if (loading) return <p>Loading...</p>;
  return (
    <div className='articles'>
      <div className='articles__filter'>
      <button
        className='articles__filter__button'
        onClick={() => {
          setOrder("desc");
          setSort("created_at");
        }}
      >
        recent
      </button>
      <button
        className='articles__filter__button'
        onClick={() => {
          setOrder("asc");
          setSort("created_at");
        }}
      >
        oldest
      </button>
      <button
        className='articles__filter__button'
        onClick={() => {
          setSort("votes");
          setOrder("desc");
        }}
      >
        popular
      </button>
      <button
        className='articles__filter__button'
        onClick={() => {
          setSort("votes");
          setOrder("asc");
        }}
      >
        least popular
      </button>
      </div>

      <WriteNewArticle setArticles={setArticles} />
      <div className='viewport'>
        <div className="scene3D-container">
          <div className='scene3D'>
            {articles.map((article) => {
              return (
                <div key={article.article_id} className="article__body">
                  <div className='article__content_container'>
                    <Link to={`/articles/${article.article_id}`} className="Link">
                      <h1 className='article__title'>{article.title}</h1>
                    </Link>       
                    <h3 className='article__topic'>{article.topic}</h3>
                    <h3 className='article__author'>{article.author}</h3>
                    <h4 className='article__created'>{article.created_at}</h4>
                    <div className='comments'>
                      <img
                        className="comment__icon"
                        src={comment_icon}
                        alt="comment_icon" />
                      
                      <span className='comment__count'>{article.comment_count}</span>
                    </div>
                      <div
                      className="votes">
                    <Vote
                      commentOrArt={article}
                      id={article.article_id}
                      type={"articles"} />
                      </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      </div>
    </div>
  );
};

export default Articles;
