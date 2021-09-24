import React from 'react';
import { VictoryChart, VictoryClipContainer, VictoryScatter } from 'victory';

// Victory charts is a great library especially made for charts, with many options to display your data

const VictoryCharts = ({data}: {data: any[]}) => {

      return(
          <div>
               <VictoryChart  
      	// domain={{ y: [0, 1] }}
      	// animate={{ duration: 2000 }}
      >
              <VictoryScatter
              data={data}
              x="slot"
              y="shares"
              size={10}
              animate={{
                // animationWhitelist: ["style", "data", "size"], // Try removing "size"
                onExit: {
                  duration: 500,
                  before: () => ({ opacity: 0.3, _y: 0 })
                },
                onEnter: {
                  duration: 500,
                  before: () => ({ opacity: 0.3, _y: 0 }),
                  after: (datum) => ({ opacity: 1, _y: datum._y })
                }
              }}   
              groupComponent={<VictoryClipContainer/>}/>
              </VictoryChart>
          </div>
      )

}

export { VictoryCharts }