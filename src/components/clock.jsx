import { useState, useEffect } from "react";

const ClockTime = () => {

    const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 200);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);


    return (
        <>
            <h3>{date.toLocaleTimeString()+ `.${date.getMilliseconds()/ 100 | 0}`}</h3>

        </>
    );
};


export default ClockTime;