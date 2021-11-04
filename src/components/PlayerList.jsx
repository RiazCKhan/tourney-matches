import Player from "./Player";
import matchData from "../data/matchData";
import playerData from "../data/playerData";
import { addWinsToPlayers, preparePlayerdata } from "../helpers/playerHelpers";


const PlayerList = (props) => {
  const playerDataArray = preparePlayerdata(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  console.log(playerDataArray)
  console.log('parsed', parsedPlayerData)
  
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    <Player />
  </section>
  )
}

export default PlayerList;