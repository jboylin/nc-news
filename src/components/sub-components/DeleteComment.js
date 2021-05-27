import { deleteById } from "../../util/api";

const DeleteComment = ({ comment, setCommentCounter, setComments }) => {
  const comment_id = comment.comment_id;
  const removeComment = () => {
    const type = "comments";
    deleteById(type, comment_id).then(() => {
      setComments((currComments) => {
        const currCommentsCopy = [...currComments];
        return currCommentsCopy.filter((currComment) => {
          return currComment.comment_id !== comment_id;
        });
      });
      setCommentCounter((counter) => {
        return counter - 1;
      });
    });
  };

  return <button onClick={() => removeComment()}>Delete</button>;
};

export default DeleteComment;
