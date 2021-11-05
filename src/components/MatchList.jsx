import Match from "./Match";
import matchData from "../data/matchData";

const MatchList = (props) => {

  const oneMatch = matchData[0];
  // console.log('one match', oneMatch)

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      <Match player={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} />
    </section>
  );
}

export default MatchList;