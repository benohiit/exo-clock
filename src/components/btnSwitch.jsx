import { useState } from 'react';
import DateCurr from './currentDate';
import Clock from './clock';
import CurrentDate from './currentDate';

const BtnToSwitch = () => {

    const [typeDate, setDate] = useState(false);

    const handleBtn = () => {
        setDate(old => !old);
        
    };

    return (
        <div>
            
            {typeDate ? <Clock/> : <CurrentDate/>}
            <button onClick={handleBtn}>Switch date / time</button>
        </div>
    );
};

export default BtnToSwitch;