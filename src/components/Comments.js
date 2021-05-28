import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchComments } from "../util/api";
import CommentOnArticle from "./sub-components/CommentOnArticle";
import DeleteComment from "./sub-components/DeleteComment";
import Vote from "./sub-components/Vote";
const Comments = ({ setCommentCounter }) => {
  let { article_id } = useParams();
  const [comments, setComments] = useState();
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id)
      .then((body) => {
        setComments(body);
        setIsCommentsLoading(false);
      })
      .catch((error) => {
        setIsCommentsLoading(false);
      });
  }, [article_id]);

  if (isCommentsLoading) return <p>Loading</p>;

  if (comments === undefined)
    return (
      <>
        <CommentOnArticle
          article_id={article_id}
          setCommentCounter={setCommentCounter}
          setComments={setComments}
        />
      </>
    );

  return (
    <>
      <CommentOnArticle
        article_id={article_id}
        setCommentCounter={setCommentCounter}
        setComments={setComments}
      />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h6>{comment.author}</h6>
              <p>{comment.body}</p>
              <Vote
                commentOrArt={comment}
                id={comment.comment_id}
                type={"comments"}
              />
              <p>{comment.created_at}</p>
              <DeleteComment
                comment={comment}
                setCommentCounter={setCommentCounter}
                setComments={setComments}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;

/* 
atm: returning the last comment but not the most recent, hmmm
Working on in the mean time: delete comment.

*/
