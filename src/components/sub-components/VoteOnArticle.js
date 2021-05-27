import { useState } from "react";
import up_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/up_arrow.png";
import down_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/down_arrow.png";
import { voteOnType } from "../../util/api";
const VoteOnArticle = ({ article }) => {
  const id = article.article_id;
  const [vote, setVote] = useState();
  const [displayVote, setDisplayVote] = useState(article.votes);

  const voteIncrement = (event) => {
    event.preventDefault();
    const type = "articles";
    voteOnType(type, id, vote);
  };

  return (
    <>
      <form className="submit__vote" onSubmit={voteIncrement}>
        <h6>
          <button
            onClick={() => {
              setDisplayVote((currDisplayVote) => currDisplayVote + 1);
              setVote({ inc_votes: 1 });
            }}
          >
            <img className="vote__icon" src={up_arrow} alt="upvote" />
          </button>
          {displayVote}
          <button
            onClick={() => {
              setDisplayVote((currDisplayVote) => currDisplayVote - 1);
              setVote({ inc_votes: -1 });
            }}
          >
            <img className="vote__icon" src={down_arrow} alt="downvote" />
          </button>
        </h6>
      </form>
    </>
  );
};

export default VoteOnArticle;

/* You were here:
    wondering whether you need to use useparams. If you need to pass down
    the whole of article anyway which contains the article id? Maybe both?
*/
