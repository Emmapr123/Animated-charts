import { useSpring } from '@react-spring/core';
import React from 'react'
import { VictoryPie } from 'victory';


const PieChart = ({data}: {data: any[]}) => {
    const { x } = useSpring({
        from: { x: 0 },
        x: 1,
        config: { duration: 1000 },
      })

    return(
        <div>   
            <VictoryPie
            animate={{  onLoad: {
                duration: 1000,
                after: (datum) => datum.y
                // before?: (datum: any) => AnimationStyle;
                // after?: (datum: any) => AnimationStyle;
                // AnimationStyle = { [key: string]: string | number };
              }
            }}
            innerRadius={20}
            labelRadius={100}
            style={{ data: {
                fill: ({ datum }) => datum.fill,
                opacity: ({ datum }) => datum.opacity
              } }}
            radius={({ datum }) => 20 + datum.y / 20}
            data={data}/>
        </div>
    )
}

export { PieChart }