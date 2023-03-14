import { useSelector, useStore } from "react-redux";
import { selectGameIsPlaying } from "./selectors";
import { autoplay } from './store'

export function PlayPauseButton() {
    // on utilise le hooks useDispatch dans notre composant
     // pour récupérer la fonction dispatch de redux
    // const dispatch = useDispatch()
    const store = useStore()
    const playing = useSelector(selectGameIsPlaying)

    return (
        <button
        className="button"
        onClick={() => {
         // au clique sur le bouton on exécute la fonction dispatch
        // avec une action.
        // dispatch(playPause())
        autoplay(store)
          
        }}>
            {playing ? "Point en cours..." : "Jouer"}
        </button>
    )
}