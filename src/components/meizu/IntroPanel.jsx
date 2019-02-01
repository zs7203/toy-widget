import React, { useRef, useEffect, useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import anime from "animejs"

import Curtain from './Curtain'
import Slogan from './Slogan'

const PanelContainer = styled.div`
  position: absolute;
  width: 558px;
  text-align: center;
  /* left: 604px; */
  /* padding-top: 330px; */
  /* opacity: 0; */
  /* margin: 0 auto; */
`

export default () => {
  cosnt[(curtainStage, setCurtainStage)] = useState(false)
  cosnt[(sloganStage, setSloganStage)] = useState(false)
  cosnt[(phoneStage, setPhoneStage)] = useState(false)

  useEffect(() => {
    setCurtainStage(true)
  })

  return (
      <PanelContainer>
          {curtainStage && <Curtain></Curtain>}
        {sloganStage && <Slogan></Slogan>}
      </PanelContainer>
  )
}
