import React, { useRef, useEffect, useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import anime from "animejs"

const CurtainWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10002;
  background-color: #000;
`
const HalfCurtain = styled.div`
  position: fixed;
  width: 100%;
  height: 51%;
  z-index: 10002;
  background-color: #12041c;
`

const UpperCurtain = styled(HalfCurtain)`
  left: 0;
  top: 0;
`
const LowerCurtain = styled(HalfCurtain)`
  right: 0;
  bottom: 0;
`

const Progress = styled.div`
  position: fixed;
  left: 0;
  width: 0;
  top: 50%;
  height: 1px;
  background-color: #888;
  z-index: 10003;
`

const Curtain = ({ onReveal }) => {
  const $progress = useRef(null)
  const $upper = useRef(null)
  const $lower = useRef(null)
  const $curtain = useRef(null)

  useEffect(() => {
    anime
      .timeline({
        targets: $progress.current
      })
      .add({
        width: "100%",
        easing: "easeInQuad",
        duration: 1000
      })
      .add({
        opacity: "0",
        easing: "linear",
        duration: 200
      })
      .add({
        targets: [$upper.current, $lower.current],
        translateY: function(el, i) {
          return i === 0 ? "-100%" : "100%"
        },
        easing: "easeInQuad",
        endDelay: 1000,
        complete: () => onReveal(true)
      })
      .add(
        {
          targets: $curtain.current,
          backgroundColor: "#152632",
          easing: "linear",
          delay: 1000,
          duration: 300,
          endDelay: 3000
        },
        "-=1500"
      )
      .add(
        {
          targets: $curtain.current,
          opacity: 0,
          duration: 2000
        },
        "+=1100"
      )
  }, [])

  return (
    <CurtainWrapper ref={$curtain}>
      <UpperCurtain ref={$upper} />
      <LowerCurtain ref={$lower} />
      <Progress ref={$progress} />
    </CurtainWrapper>
  )
}

const Demo = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
`

const CurtainDemo = () => {
  return (
    <Demo>
      <Curtain />
    </Demo>
  )
}

export { Curtain as default, CurtainDemo }
