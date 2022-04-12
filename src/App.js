import logo from './logo.svg';
import './App.css';
//import DateCurr from './components/currentDate';
//import Clock from './components/clock';
import BtnSwitch from './components/btnSwitch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BtnSwitch />
        
      </header>
    </div>
  );
}

export default App;
