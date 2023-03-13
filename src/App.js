
import { Display } from "./Display";
import { PlayerPoint } from "./PlayerPoint";
import { PlayerScore } from "./PlayerScore";
import { PlayPauseButton } from "./PlayPauseButton";
import { PointScoredButton } from './PointScoredButton'
import { ResetButton } from './ResetButton'
 
function App() {
  return (
    <div >
    
        <PlayerPoint playerId="player1" playerName="Player 1" />
        <PlayerPoint playerId="player2" playerName="Player 2" />
        <Display />
        <PlayerScore playerId="player1" playerName="Player 1" />
        <PlayerScore playerId="player2" playerName="Player 2" />
        <div className="buttons-row">
            <PointScoredButton playerId="player1"  >Point joueur 1</PointScoredButton>
            <PointScoredButton playerId="player2"  >Point joueur 2</PointScoredButton>
        </div>
        <div className="buttons-row">
          <ResetButton />
          <PlayPauseButton />
        </div>

    </div>
  );
}

export default App;
