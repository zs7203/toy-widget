// https://css-tricks.com/reversing-an-easing-curve/

import React, { useRef, useEffect, useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import anime from "animejs"

const BackgoundColor = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");
* {
	box-sizing: border-box;
}

body {
	background-color: #141316;
	color: #FAFAFA;
}

p {
	margin-top: 0;
	margin-bottom: 30px;
}

/* List reset */
ul {
	padding: 0;
	margin: 0;
}
`

const Wrapper = styled.div`
  height: 100vh;
  /* min-height: 600px; */
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const nextButton = css`
  left: auto;
  right: 0;
  transform: translate3d(0, -50%, 0) rotate(180deg);
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 65px;
  padding: 20px;
  transition: opacity 200ms;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  z-index: 2;
  ${props => "next" in props && nextButton}

  svg {
    fill: #fafafa;
  }
  &:hover,
  &:focus {
    opacity: 0.6;
  }
`

const SlideList = styled.ul`
  width: calc(100vw - 40px);
  height: calc(100vw / 2);
  font-family: Lato, sans-serif;

  &::before,
  &::after {
    content: "";
    width: 180px;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #141316 60%, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #141316 60%, transparent);
  }

  /* Wallop */
  position: relative;
  overflow: hidden;
`

const SlideItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 40px 65px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;

  /* Wallop */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const slideContentStyle = css`
  opacity: 0;
  animation-timing-function: var(--originalCurve);
  /* width: calc(100% - 120px); */
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const SlideHeading = styled.h2`
  /* --delay: 300ms; */
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  ${slideContentStyle}
`

const SlideQuote = styled.p`
  /* --delay: 420ms; */
  font-size: 1.1rem;
  line-height: 1.4;
  letter-spacing: 0.03em;
  ${slideContentStyle}
`
const SlideCite = styled.cite`
  /* --delay: 540ms; */
  display: block;
  ${slideContentStyle}
`

const Carousel = styled.div`
  position: relative;
`

export default ({slides}) => {
  const DIRECTION = { INIT: 0, LEFT: 1, RIGHT: 2 }
  const [current, setCurrent] = useState(0)
  const [pre, setPre] = useState(0)
  const [x1, y1, x2, y2] = [0.1, 0.67, 0.29, 0.98]
  const slideInCurve = `cubicBezier(${x1}, ${y1}, ${x2}, ${y2});`
  const slideOutCurve = `cubicBezier(${1 - x1}, ${1 - y1}, ${1 - x2}, ${1 -
    y2});`
  const $slide = useRef(null)

  // $slide.current.children[0].querySelectorAll(".stagger")
  const animeIn = (item, direction) => {
    return anime({
      targets: item,
      translateX: [`${direction === DIRECTION.LEFT ? "-" : ""}80%`, 0],
      opacity: [0, 1],
      duration: 400,
      easing: slideInCurve,
      delay: anime.stagger([100, 420, 540])
    })
  }
  const animeOut = (item, direction) => {
    return anime({
      targets: item,
      translateX: [0, `${direction === DIRECTION.LEFT ? "" : "-"}80%`],
      opacity: [1, 0],
      duration: 400,
      easing: slideOutCurve,
      delay: anime.stagger([100, 420, 540])
    })
  }

  useEffect(() => {
    if (current === pre) {
      animeIn(
        $slide.current.children[current].querySelectorAll(".stagger"),
        DIRECTION.INIT
      )
      return
    }
    const direction =
      current - pre > 0
        ? pre === 0 && current === slides.length - 1
          ? DIRECTION.LEFT
          : DIRECTION.RIGHT
        : current === 0 && pre === slides.length - 1
        ? DIRECTION.RIGHT
        : DIRECTION.LEFT
    console.log({ direction, current, pre })
    const preAnim = animeOut(
      $slide.current.children[pre].querySelectorAll(".stagger"),
      direction
    )
      preAnim.finished.then(() => animeIn(
        $slide.current.children[current].querySelectorAll(".stagger"),
        direction
      ))
  })
  return (
    <>
      <BackgoundColor />
      <Wrapper>
        <Carousel>
          <SlideList ref={$slide}>
            {slides.map((li, i) => (
              <SlideItem key={li.heading}>
                <SlideHeading className={"stagger"}>{li.heading}</SlideHeading>
                <blockquote>
                  <SlideQuote className={"stagger"}>{li.quote}</SlideQuote>
                  <SlideCite className={"stagger"}>{li.cite}</SlideCite>
                </blockquote>
              </SlideItem>
            ))}
          </SlideList>
          <Button
            onClick={() => (
                setPre(current),
                setCurrent(current + 1 > slides.length - 1 ? 0 : current + 1)
              )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.9 50.2">
              <path d="M25.1 50.2L0 25.1 25.1 0l2.8 2.8L5.7 25.1l22.2 22.2z" />
            </svg>
          </Button>
          <Button
            next
            onClick={() => (
                setPre(current),
                setCurrent(current - 1 < 0 ? slides.length - 1 : current - 1)
              )}
            
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.9 50.2">
              <path d="M25.1 50.2L0 25.1 25.1 0l2.8 2.8L5.7 25.1l22.2 22.2z" />
            </svg>
          </Button>
        </Carousel>
      </Wrapper>
    </>
  )
}
