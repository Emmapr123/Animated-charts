import './App.css';
import { AnimatedBar, AnimatedLine, VictoryCharts } from './components';

function App() {

  const data1 = [
    {slot: 'Feb 2020', shares: 0},
    {slot: 'Aug 2020', shares: 554},
    {slot: 'Feb 2021', shares: 2227},
  ];

  const data2 =
    {
      available: 5000,
      maxAmout: 1000,
      bought: 350
    }

  return (
    <div className="App">
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}> 
          <AnimatedBar length={1}/>
          <AnimatedBar length={(554 / 2227) * 100} delay={250} duration={250}/>
          <AnimatedBar length={100} delay={500} duration={1000}/>
      </div>
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}> 
          <AnimatedLine data={data1} />
      </div>
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}>
        <VictoryCharts data={data1} />
      </div>
    </div>
  );
}

export default App;
