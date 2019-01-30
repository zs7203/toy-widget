import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import {
  tween,
  styler,
  value,
  listen,
  pointer,
  action,
  spring,
  decay
} from "popmotion"

import { Centered } from "../src/components/Tools"
import Blick from "../src/components/popmotion/Blick"

const Ball = styled.div`
  width: 100px;
  height: 100px;
  background: pink;
  border-radius: 50%;
`

export default () => {
  const ref = useRef(null)
  const control = useRef(null)
  useEffect(() => {
    const BallStyler = styler(ref.current)
    const ballXY = value(0 , BallStyler.set("x"))
    // const setBallX = value(BallStyler.get('x'), BallStyler.set('x'))
    listen(ref.current, "mousedown").start(() => {
      control.current = pointer({ x: BallStyler.get("x") })
        .pipe(({ x }) => x)
        .start(ballXY)
    })
    listen(document, "mouseup").start(() => {
      control.current && control.current.stop()
      decay({from: ballXY.get('x'), velocity: ballXY.getVelocity(), power: .1 }).start(ballXY)
    })
  })
  return (
    <Centered>
      <div>
        <Ball ref={ref} />
      </div>
    </Centered>
  )
}
