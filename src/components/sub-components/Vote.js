import { useParams } from "react-router";
import { useState, useEffect } from "react";
import up_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/up_arrow.png";
import down_arrow from "/home/joseph/Northcoders/frontend/week-10/nc-news/src/images/down_arrow.png";
import { voteArticle } from "../../util/api";
const VoteOnArticle = () => {
  let { article_id } = useParams();
  const [vote, setVote] = useState();
  const [isLoading, setIsLoading] = usestate(true);

  useEffect(() => {
    voteArticle(article_id, vote);
  });
};

export default VoteOnArticle;

/* You were here:
    wondering whether you need to use useparams if you need to pass down
    the whole of article anyway which contains the article id? Maybe both?
*/
