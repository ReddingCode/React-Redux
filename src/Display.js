import { useSelector } from "react-redux";
import { selectDisplayText } from "./selectors";


export function Display() {
    // on utilise useSelector avec en paramètre une fonction
  // qui permet de récupérer uniquement la propriété `playing`
  // du state
      const displayText = useSelector(selectDisplayText)
    return <p className="display">{displayText}</p>
  }
  // on peut ensuite utiliser cette valeur dans le rendu
  
