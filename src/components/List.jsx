import React, { useState, useEffect } from "react"
import styled from "styled-components"
import posed from "react-pose"

const List = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: "-100%", delay: 300 }
})

const Li = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})

const Sidebar = styled(List)`
  width: 300px;
  height: 100vh;
  background: #eee;
  padding: 30px;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  position: absolute;
  top: 0;
  bottom: 0;
`

const Item = styled(Li)`
  background: #43415f;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  opacity: 0;
  margin-bottom: 10px;
  transform-origin: 0%;
  color: white;
  &:nth-child(1) {
    background: #f69a9a;
  }

  &:nth-child(2) {
    background: #83ae9b;
  }

  &:nth-child(3) {
    background: #ef4566;
  }

  &:nth-child(4) {
    background: #f9cdae;
  }

  &:nth-child(5) {
    background: #c8c8a9;
  }
`

export default () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setTimeout(() => setOpen(!open), 1000)
  })
  return (
    <Sidebar pose={open ? "open" : "closed"}>
      <Item />
      <Item />
      <Item />
      <Item />
    </Sidebar>
  )
}
