import { useState } from "react";
import up_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/up_arrow.png";
import down_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/down_arrow.png";
import { voteOnType } from "../../util/api";
const VoteOnArticle = ({ commentOrArt, id, type }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [disable, setDisable] = useState();
  const handleVote = (vote) => {
    setVoteChange(vote);
    voteOnType(type, id, vote);
  };

  return (
    <>
      <div className="submit__vote">
        <h6>
          <button
            disabled={disable}
            id="button__upvote"
            onClick={() => {
              handleVote(1);
            }}
          >
            <img className="vote__icon" src={up_arrow} alt="upvote" />
          </button>
          {commentOrArt.votes + voteChange}
          <button
            disabled={disable}
            id="button__downvote"
            onClick={() => {
              handleVote(-1);
            }}
          >
            <img className="vote__icon" src={down_arrow} alt="downvote" />
          </button>
        </h6>
      </div>
    </>
  );
};

export default VoteOnArticle;

/* You were here:
    wondering whether you need to use useparams. If you need to pass down
    the whole of article anyway which contains the article id? Maybe both?
*/
