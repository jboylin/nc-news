import { useState } from "react";
import { deleteById } from "../../util/api";

const DeleteComment = ({ comment, setCommentCounter, setComments }) => {
  const comment_id = comment.comment_id;
  const [deleting, setDeleting] = useState(false);
  const removeComment = () => {
    setDeleting(true);
    const type = "comments";
    deleteById(type, comment_id).then(() => {
      setDeleting(false);
      setComments((currComments) => {
        return currComments.filter((currComment) => {
          return currComment.comment_id !== comment_id;
        });
      });
      setCommentCounter((counter) => {
        return counter - 1;
      });
    });
  };
  if (deleting) return <h1>deleting...</h1>;
  return <button onClick={removeComment}>Delete</button>;
};

export default DeleteComment;
