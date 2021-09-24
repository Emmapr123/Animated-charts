import React from 'react'
import { useSpring, animated } from 'react-spring'

// This Chart uses react-spring, a library made of animations
// This component is one bar each, that wants to know what length it should be (a percentage)
// The delay can be given to animate each bar separately

function AnimatedBar({ delay, length, duration }: {delay?: number, length: number, duration?: number}) {
  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: { duration: duration ? duration : 500 },
    delay: delay ? delay : 0
  })

  const props = {
    width: x.to({
      range: [0,1],
      output: ['1%', `${length}%`]
    }),
    backgroundColor: 'lightpink',
    height: 20,
  }
  return <animated.div style={props}>
  </animated.div>
}

export { AnimatedBar }