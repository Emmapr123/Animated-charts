import './App.css';
import { AnimatedBar } from './components';

function App() {
  return (
    <div className="App">
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}> 
          <AnimatedBar length={30}/>
          <AnimatedBar length={75} delay={1000} />
          <AnimatedBar length={45} delay={2000}/>
      </div>
    </div>
  );
}

export default App;
