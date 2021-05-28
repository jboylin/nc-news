import { useState } from "react";
import { postCommentOnArticle } from "../../util/api";
import { useContext } from "react";
import { UserContext } from "../context/user";
const CommentOnArticle = ({ article_id, setCommentCounter, setComments }) => {
  const { user } = useContext(UserContext);
  const starterComment = {
    username: user.username,
    body: "",
  };

  const [comment, setComment] = useState(starterComment);

  const postComment = (event) => {
    event.preventDefault();
    postCommentOnArticle(article_id, comment).then((data) => {
      setComments((currComments) => {
        return [...currComments, data.comment];
      });
    });
    setComment(starterComment);
    setCommentCounter((counter) => {
      return counter + 1;
    });
  };

  return (
    <>
      <h1>Post Comment</h1>
      <form className="comment__form" onSubmit={postComment}>
        <label htmlFor="comment_body">
          comment...
          <input
            className="form__input"
            id="comment_body"
            type="text"
            required
            value={comment.body}
            onChange={(event) => {
              setComment((comments) => {
                return { ...comments, body: event.target.value };
              });
            }}
          ></input>
        </label>
      </form>
    </>
  );
};

export default CommentOnArticle;
