
import { Display } from "./Display";
import { PlayPauseButton } from "./PlayPauseButton";
import { PointScoredButton } from './PointScoredButton'
import { ResetButton } from './ResetButton'
 
function App() {
  return (
    <div >
        <Display />
        <div className="buttons-row">
            <PointScoredButton playerId="player1"  >Point joueur 1</PointScoredButton>
            <PointScoredButton playerId="player2"  >Point joueur 2</PointScoredButton>
        </div>
        <div>
          <ResetButton />
          <PlayPauseButton />
        </div>

    </div>
  );
}

export default App;
