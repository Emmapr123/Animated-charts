import './App.css';
import { AnimatedBar, AnimatedLine, AnimatedPieChart, PieChart, VictoryCharts } from './components';

function App() {

  const data1 = [
    {slot: 'Feb 2020', shares: 0},
    {slot: 'Aug 2020', shares: 554},
    {slot: 'Feb 2021', shares: 2227},
  ];

  const data2 =
  [{
      x: 'Available',
      y: 2000,
      fill: 'lightpink'
  },
  { 
      x: 'Max. buy',
      y: 650,
      fill: 'lightgreen'
  },
  {
      x: 'bought',
      y: 350,
      fill: 'lightblue'
  }]

  const data3 = [
    {day: '1', sell: 600, buy: 400},
    {day: '2', sell: 554, buy: 500},
    {day: '3', sell: 2227, buy: 1000},
    {day: '4', sell: 900, buy: 3000}
  ]

  const data4 = [
    {
      'name': 'pending',
      'value': 1000,
      fill: 'lightpink'
  },
  { 
      'name': 'payed',
      'value': 1000,
      fill: 'lightgreen'
  },
  {
      'name': 'transfered',
      'value': 200,
      fill: 'lightblue'
  }]


  return (
    <div className="App">
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}> 
          <AnimatedBar length={1}/>
          <AnimatedBar length={(554 / 2227) * 100} delay={250} duration={250}/>
          <AnimatedBar length={100} delay={500} duration={1000}/>
      </div>
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}> 
          <AnimatedLine data={data3} />
      </div>
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}>
        <VictoryCharts data={data1} />
      </div>
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}>
        <PieChart data={data2} />
      </div>
      <div style={{width: 400, height: 400, alignContent: 'space-evenly', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column'}}>
        <AnimatedPieChart data={data4}/>
      </div>
    </div>
  );
}

export default App;
