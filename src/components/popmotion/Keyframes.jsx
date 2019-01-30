import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import {
  keyframes,
  easing,
  styler,
  listen,
  pointer,
  value,
  decay
} from "popmotion"

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: #ff1c68;
  transform-origin: 50% 50%;
`

const Container = styled.div`
  transform-style: preserve-3d;
  perspective: 500px;
  width: 400px;
  height: 300px;
`

export default () => {
  const $el = useRef(null)
  useEffect(() => {
    const divStyler = styler($el.current)
    keyframes({
      values: [
        { x: 0, y: 0, rotateY: 0, background: "#9B65DE" },
        { x: 300, y: 0, rotateY: 180, rotateX: 0, background: "#14D790" },
        { x: 300, y: 200, rotateY: 180, rotateX: 180, background: "#FF1C68" },
        { x: 0, y: 200, rotateY: 0, rotateX: 180, background: "#198FE3" },
        { x: 0, y: 0, rotateY: 0, rotateX: 0, background: "#9B65DE" }
      ],
      duration: 3000,
      easings: easing.easeInOut,
      loop: Infinity
    }).start(divStyler.set)
  })
  return (
    <Container>
      <Box ref={$el} />
    </Container>
  )
}
