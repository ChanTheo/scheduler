import react, {useState} from "react";

export default function useVisualMode (intialMode) {
  const [mode, setMode] = useState(intialMode);
  const [history, setHistory] = useState([]);

    function transition(modeToSet, replace = false) {
      if (replace){
        const tempHistory = [...history]
        setHistory([...tempHistory]);
        setMode(modeToSet)
      } else {
        setHistory([...history, mode])
        setMode(modeToSet)
      }    
    }
    
    function back (){
      const tempHistory = [...history]
      if (tempHistory.length > 0){
     const poppedMode = tempHistory.pop()
        setHistory([...tempHistory])
        setMode(history[history.length-1])
      }
    }
  return {mode, transition, back }
}

