import React from 'react';
import { VictoryBar, VictoryChart, VictoryClipContainer, VictoryScatter } from 'victory';

const VictoryCharts = () => {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];

      return(
          <div>
               <VictoryChart  animate={{ duration: 2000, easing: "bounce" }}
      	// domain={{ y: [0, 1] }}
      	// animate={{ duration: 2000 }}
      >
              <VictoryScatter
              data={data}
              x="quarter"
              y="earnings"
              size={10}
              animate={{
                onEnter: {
                  duration: 500,
                  before: () => ({
                    _y: 0,
                    fill: "orange",
                    label: "BYE"
                  })
                }
              }}
              groupComponent={<VictoryClipContainer/>}/>

              </VictoryChart>
          </div>
      )

}

export { VictoryCharts }