import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import posed from "react-pose"

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
})

const StyledBox = styled(Box)`
  width: 100px;
  height: 100px;
  background: #ff1c68;
  transform-origin: 50% 50%;
`

export default () => {
  const [state, setState] = useState(true)
  useEffect(() => {
    const pid = setTimeout(() => {
      setState(!state)
    }, 1000)
    return () => clearTimeout(pid)
  })
  return <StyledBox pose={state ? "visible" : "hidden"} />
}
