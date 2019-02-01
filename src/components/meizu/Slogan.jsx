import React, { useRef, useEffect, useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import anime from "animejs"

const SloganContainer = styled.div`
  position: absolute;
  left: 604px;
  width: 558px;
  padding-top: 330px;
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  text-align: center;
  margin: 0 auto;
  color: #fff;
  font-size: 28px;
`

const Letter = styled.span`
  display: block;
  padding: 0 1px;
  background-repeat: no-repeat;
`

const SmallLetter = styled(Letter)`
  text-indent: -999px;
  width: ${props => [44, 44, 22, 32, 47, 42, 38, 44][props.index]}px;
  height: 42px;
  background-image: url("//www3.res.meizu.com/static/cn/16/index/images/txt1_7fb9eef.png");
  background-position-x: ${props =>
    [-116, -158, -207, -227, -264, -310, -355, -394][props.index]}px;
`

const LetterBox = styled.div`
  overflow: hidden;
`

const LetterBoxList = styled.div`
  display: flex;
`

const LargeLetter = styled(Letter)`
  height: 193px;
  width: ${props => [135, 125, 47, 131, 149][props.index]}px;
  background-image: ${props =>
    "url(" +
    [
      "https://www3.res.meizu.com/static/cn/16/index/images/txt2-1_7144121.png",
      "https://www3.res.meizu.com/static/cn/16/index/images/txt2-2_1870755.png",
      "https://www3.res.meizu.com/static/cn/16/index/images/txt2-3_48f4345.png",
      "https://www3.res.meizu.com/static/cn/16/index/images/txt2-4_4475258.png",
      "https://www3.res.meizu.com/static/cn/16/index/images/txt2-5_d55c4f7.png"
    ][props.index] +
    ")"};
`

const SmallLetterBoxDemo = () => {
  const $letter = useRef(null)
  useEffect(() => {
    anime({
      targets: $letter.current,
      translateX: [-130, 0],
      easing: "easeOutQuart"
    })
  })
  return (
    <LetterBox>
      <SmallLetter index={0} ref={$letter} />
    </LetterBox>
  )
}
const LargeLetterBoxDemo = () => {
  const $letter = useRef(null)
  useEffect(() => {
    anime({
      targets: $letter.current,
      translateX: [-150, 0],
      easing: "easeOutQuart"
    })
  })
  return (
    <LetterBox>
      <LargeLetter index={1} ref={$letter} />
    </LetterBox>
  )
}

const SmallLetterListDemo = () => {
  const $list = useRef(null)
  useEffect(() => {
    anime({
      targets: $list.current.querySelectorAll("span"),
      translateX: [-130, 0],
      easing: "easeOutQuart",
      delay: anime.stagger(200)
    })
  })
  return (
    <LetterBoxList ref={$list}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <LetterBox key={i}>
          <SmallLetter index={i} />
        </LetterBox>
      ))}
    </LetterBoxList>
  )
}

const LargeLetterListDemo = () => {
  const $list = useRef(null)
  useEffect(() => {
    anime({
      targets: $list.current.querySelectorAll("span"),
      translateX: [-150, 0],
      easing: "easeOutQuart",
      delay: anime.stagger(100)
    })
  })
  return (
    <LetterBoxList ref={$list}>
      {[0, 1, 2, 3, 4].map(i => (
        <LetterBox key={i}>
          <LargeLetter index={i} />
        </LetterBox>
      ))}
    </LetterBoxList>
  )
}

const Button = styled.a`
  text-decoration: none;
  position: relative;
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
  display: inline-block;
  width: 50%;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  margin-left: -2px;
  :hover {
    color: #00c3f5;
    background-color: #fff;
  }
  &:first-child {
    margin-left: 0;
  }
`

const ButtonGroup = styled.div`
  width: 268px;
  display: inline-flex;
  opacity: 0;
`

const btns = [
  {
    name: "立即购买",
    href: "https://detail.meizu.com/item/meizu16th.html"
  },
  {
    name: "了解详情",
    href: "https://www.meizu.com/16/summary/"
  }
]
const Action = () => {
  const $btns = useRef(null)
  useEffect(() => {
    anime({
      targets: $btns.current,
      opacity: [0, 1],
      translateY: [30, 0],
      easing: "easeOutQuart"
    })
  })
  return (
    <ButtonGroup ref={$btns}>
      {btns.map(btn => (
        <Button href={btn.href}>{btn.name}</Button>
      ))}
    </ButtonGroup>
  )
}

const Panel = styled.div`
  opacity: 0;
  width: 558px;
  text-align: center;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const SloganPanel = ({ className }) => {
  const $slogan = useRef(null)
  const $smallLetters = useRef(null)
  const $largeLetters = useRef(null)
  const $btns = useRef(null)
  useEffect(() => {
    anime
      .timeline({
        easing: "easeOutQuart"
      })
      .add({
        targets: $slogan.current,
        opacity: 1,
        duration: 50
      })
      .add(
        {
          targets: $smallLetters.current.querySelectorAll("span"),
          translateX: [-130, 0],
          delay: anime.stagger(200)
        },
        0
      )
      .add(
        {
          targets: $largeLetters.current.querySelectorAll("span"),
          translateX: [-150, 0],
          delay: anime.stagger(100)
        },
        2000
      )
      .add(
        {
          targets: $btns.current,
          opacity: [0, 1],
          translateY: [30, 0]
        },
        2500
      )
      .add({
        targets: $slogan.current,
        translateX: 530,
        duration: 1000
      })
  }, [])
  return (
    <Panel className={className} ref={$slogan}>
      {/* 魅族16旗舰手机 */}
      <LetterBoxList ref={$smallLetters}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <LetterBox key={i}>
            <SmallLetter index={i} />
          </LetterBox>
        ))}
      </LetterBoxList>
      {/* 追求源于热爱 */}
      <LetterBoxList ref={$largeLetters}>
        {[0, 1, 2, 3, 4].map(i => (
          <LetterBox key={i}>
            <LargeLetter index={i} />
          </LetterBox>
        ))}
      </LetterBoxList>
      {/* Action按钮 */}
      <ButtonGroup ref={$btns} style={{ marginTop: 135 }}>
        {btns.map(btn => (
          <Button href={btn.href} key={btn.name}>
            {btn.name}
          </Button>
        ))}
      </ButtonGroup>
    </Panel>
  )
}

export {
  SmallLetterBoxDemo,
  SmallLetterListDemo,
  LargeLetterBoxDemo,
  LargeLetterListDemo,
  Action,
  SloganPanel as default
}
