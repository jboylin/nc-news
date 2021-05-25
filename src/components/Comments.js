import { useParams } from "react-router";
import { useEffect, useState } from "react";
import up_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/up_arrow.png";
import down_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/down_arrow.png";
import { fetchComments } from "../util/api";
const Comments = () => {
  let { article_id } = useParams();
  const [comments, setComments] = useState();
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  useEffect(() => {
    fetchComments(article_id).then((body) => {
      setComments(body);
      setIsCommentsLoading(false);
    });
  }, [article_id]);

  if (isCommentsLoading) return <p>Loading</p>;

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <h6>{comment.author}</h6>
            <p>{comment.body}</p>
            <p>
              <img className="vote__icon" src={up_arrow} alt="upvote" />
              {comment.votes}{" "}
              <img className="vote__icon" src={down_arrow} alt="downvote" />
            </p>
            <p>{comment.created_at}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
