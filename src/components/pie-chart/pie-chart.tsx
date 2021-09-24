import React from 'react'
import { VictoryChart, VictoryClipContainer, VictoryPie, VictoryScatter } from 'victory';


const PieChart = () => {
    const data2 =
    [{
        x: 'Available',
        y: 5000
    },
    { 
        x: 'Max buy',
        y: 650
    },
    {
        x: 'bought',
        y: 350
    }]

    return(
        <div>
            <VictoryPie
            colorScale={['lightpink', 'lightblue', 'lightyellow']}
            data={data2}/>
        </div>
    )
}

export { PieChart }