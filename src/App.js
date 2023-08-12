import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './Button';
import { TimeText } from './TimeText';

function App() {


  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [decisecond, setDecisecond] = useState(0)
  const [startFlag, setStartFlag] = useState(true)

  const stopWatch = () => {
    if (startFlag) {

      if (decisecond === 100) {
        setDecisecond(0)
        setSecond(second + 1)
      }
      if (second === 60) {
        setSecond(0)
        setMinute(minute + 1)
      }
      setDecisecond(decisecond + 1)
      setTimeout(stopWatch, 10);
    }
  };
  useEffect(stopWatch,[startFlag])
  const onClickStart = () => {
    console.log("start")
    stopWatch()

  }
  const onClickPause = () => {
    console.log("pause")
    setStartFlag(false)
  }
  const onClickReset = () => {
    console.log("reset")
    setStartFlag(false)
    setDecisecond(0)
    setSecond(0)
    setMinute(0)
  }
  return (
    <>
      <div className='title'>
        stop watch </div>
      <div className="container">
        <TimeText text={minute} /> <TimeText text=":" />
        <TimeText text={second} />  <TimeText text=":" />
        <TimeText text={decisecond} />
      </div>
      <div className="button-container">
        <Button id={"minute"} text="Start" onClick={onClickStart} className={"btn-class start-btn"} />
        <Button id={"second"} text="Pause" onClick={onClickPause} className={"btn-class pause-btn "} />
        <Button id={"decisecond"} text="Reset" onClick={onClickReset} className={"btn-class reset-btn"} />
      </div>
    </>
  );
}

export default App;
