import React, {useState, useEffect} from 'react'

const START_STATE = "Start";
const STOP_STATE = "Stop";

const ToggleButton = () => {
    const [text, setText] = useState(START_STATE);
    useEffect(() => console.log("ToggleButton state: " + text),[text])
  return (
    <button onClick={() => text===START_STATE? setText(STOP_STATE) : setText(START_STATE)}>{text}</button>
  )
}

export default ToggleButton