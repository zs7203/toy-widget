import React, {useState, useEffect} from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"

const Shade = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const PosedShade = posed(Shade)({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })

const Modal = styled.div`
  position: absolute;
  width: 500px;
  height: 300px;
  background: white;
  border-radius: 10px;
`

const PosedModal = posed(Modal)({
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: "spring", stiffness: 1000, damping: 15 },
        default: { duration: 300 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 }
    }
  })

export default () => {
    const [isVisible, setVisible] = useState(false)
    useEffect(() => {
        setTimeout(() => setVisible(!isVisible), 1000)
    })
    return (
      <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <PosedShade key="shade" />,
          <PosedModal key="modal" />
        ]}
      </PoseGroup>
    )
}