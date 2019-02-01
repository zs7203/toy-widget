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

const Curtain = () => {
  const $progress = useRef(null)
  const $upper = useRef(null)
  const $lower = useRef(null)
  const $curtain = useRef(null)

  useEffect(() => {
    let progressAnim = anime
      .timeline({
        targets: $progress.current
      })
      .add({
        width: "100%",
        easing: "linear"
      })
      .add({
        opacity: "0",
        easing: "linear",
        duration: 200
      })
    progressAnim.finished.then(() => {
      $progress.current.style.visibility = "hidden"
      anime({
        targets: $upper.current,
        translateY: "-100%",
        easing: "easeInQuad"
      })
       anime({
        targets: $lower.current,
        translateY: "100%",
        easing: "easeInQuad",
        complete: () => ($curtain.current.style.display = "none")
      })
    })
  })
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
  const $background = useRef(null)
  useEffect(() =>
    anime({
      targets: $background.current,
      backgroundColor: "#152632",
      delay: 2500
    })
  )

  return (
    <Demo ref={$background}>
      <Curtain />
    </Demo>
  )
}

export { Curtain as default, CurtainDemo }
