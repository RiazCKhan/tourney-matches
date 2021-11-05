import matchData from "../data/matchData";
import Match from "./Match";

const MatchList = (props) => {

const matches = props.matchData.map((match) => {

// console.log('props match data', props.matchData)
// console.log('i am each match', match)

return (
  <Match
  key={ match.matchNumber }
  players={ match.players }
  winner={ match.winner }
  scoreDifference={ match.scoreDifference } 
  />
  )
})

// console.log('i am matches', matches)

return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;