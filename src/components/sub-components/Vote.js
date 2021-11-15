import { useState } from "react";
import up_arrow from "../../images/up_arrow.png";
import down_arrow from "../../images/down_arrow.png";
import { voteOnType } from "../../util/api";
import '../styles/Vote.scss';


const VoteOnArticle = ({ commentOrArt, id, type }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [disable, setDisable] = useState();
  const handleVote = (vote) => {
    setVoteChange(vote);
    voteOnType(type, id, vote);
  };


  return (
    <div className="vote__container">
      <div className="submit__vote">
        <div className="vote__count">
          <button
            className='vote__button'
            disabled={disable}
            id="button__upvote"
            onClick={() => {
              handleVote(1);
              setDisable(true);
            }}
          >
            <img className="vote__icon" src={up_arrow} alt="upvote" />
          </button>
          <h3 className='vote__count__number'>{commentOrArt.votes + voteChange}</h3>
          <button
            className="vote__button"
            disabled={disable}
            id="button__downvote"
            onClick={() => {
              handleVote(-1);
              setDisable(true);

            }}
          >
            <img className="vote__icon" src={down_arrow} alt="downvote" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteOnArticle;

