const Match = (props) => {

  //console.log('match prop', props)

  return (
    <article className="Match">
      <h1> {props.players[0]} <span>vs</span> {props.players[1]} </h1>
      {(props.winner) ? <h2> {props.winner} is the winner by {props.scoreDifference}!</h2> : <h2>No winners yet!</h2>}
    </article>
  )
}


/* Alternative solutions for/from Condition Rendering 'Walk Thru' 
  {props.winner && <h2>{props.winner} is the winner by {props.scoreDifference}!</h2>}
  {!props.winner && <h2>No winners yet!</h2>}

  !props.winner
  - if no winner, i.e., input = undefined/null = falsy
  - !props.winner = !falsy = True, render 'No winners'
  OR
  - if winner, i.e., input = truthy
  - !props.winner = !truthy = False, WILL NOT render 'No winners' */

export default Match;