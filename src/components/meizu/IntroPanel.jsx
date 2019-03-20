import React, { useState } from "react"
import styled from "styled-components"

import Curtain from "./Curtain"
import Slogan from "./Slogan"
import Phone from "./Phone"

const PositionedSlogan = styled(Slogan)`
  position: absolute;
  left: 100px;
  padding-top: 330px;
`

const PositionedPhone = styled(Phone)`
  position: absolute;
  top: 180px;
  opacity: 0;
  transform: translateX(110px);
`

const BackImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background: url(//www3.res.meizu.com/static/cn/16/index/images/kv_07d3d24.jpg)
    center top no-repeat;
`

const Container = styled.div`
  width: 100%;
  height: 1061px;
  position: relative;
`

const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  z-index: 10003;
`

export default () => {
  let [slogan, setSlogan] = useState(false)
  let [phone, setPhone] = useState(false)

  return (
    <Container>
      <BackImage />
      <Curtain onReveal={setSlogan} />
      <Wrapper>
        {slogan && <PositionedSlogan onShift={setPhone} />}
        {phone && <PositionedPhone />}
      </Wrapper>
    </Container>
  )
}
