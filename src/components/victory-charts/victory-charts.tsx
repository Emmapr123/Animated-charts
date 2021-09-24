import React from 'react';
import { VictoryChart, VictoryClipContainer, VictoryScatter } from 'victory';

// Victory charts is a great library especially made for charts, with many options to display your data

const VictoryCharts = ({data}: {data: any[]}) => {

      return(
          <div>
               <VictoryChart  animate={{ duration: 2000, easing: "bounce" }}
      	// domain={{ y: [0, 1] }}
      	// animate={{ duration: 2000 }}
      >
              <VictoryScatter
              data={data}
              x="slot"
              y="shares"
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