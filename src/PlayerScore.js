import { useSelector } from "react-redux";
import { selectPlayerHasAdvantage, selectPlayerScore, selectPointBeforeWin } from "./selectors";


// const selectPlayerHasAdvantage = SelectPlayerHasAdvantage()

export function PlayerScore({ playerId, playerName}) {
     // playerId est soit "player1" soit "player2"
    // on l'utilise dans le selector pour accéder au score du joueur !
    const score = useSelector(selectPlayerScore(playerId))
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
    const pointsBeforeWin = useSelector(selectPointBeforeWin(playerId))
    return (
         <div className="player-score">
        <p>
          {playerName}
          {pointsBeforeWin === null
            ? ""
            : ` (encore ${pointsBeforeWin} ${
                pointsBeforeWin > 1 ? "points" : "point"
              })`}
        </p>
        <p>{(hasAdvantage ? "Avantage " : "") + score}</p>
      </div>
    )
}