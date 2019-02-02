import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import anime from "animejs"

const Phone = styled.div`
  width: 397px;
  height: 757px;
  background-image: url(//www3.res.meizu.com/static/cn/16/index/images/kv-phone_1083aa4.png);
  background-repeat: no-repeat;
  transform: scale(1.1);
`

export default ({ className }) => {
  const $phone = useRef(null)
  useEffect(() => {
    anime({
      targets: $phone.current,
      opacity: [0, 1],
      scale: [1.1, 1],
      easing: "easeInQuad",
      delay: 500,
      duration: 100
    })
  }, [])
  return <Phone ref={$phone} className={className} />
}
