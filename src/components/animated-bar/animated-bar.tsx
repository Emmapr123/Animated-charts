import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function AnimatedBar({ delay, length }: {delay?: number, length: number}) {
  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: { duration: 1000 },
    delay: delay ? delay : 0
  })

  const props = {
    width: x.to({
      range: [0,1],
      output: ['1%', `${length}%`]
    }),
    backgroundColor: 'blue',
    height: 20,
  }
  return <animated.div style={props}>
  </animated.div>
}

export { AnimatedBar }