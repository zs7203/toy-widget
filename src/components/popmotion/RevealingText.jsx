// https://css-tricks.com/slide-an-image-to-reveal-text-with-css-animations/

import React, { useRef, useEffect, useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import anime from "animejs"

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 400px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
`
/* The div that contains the image  */
/* Centering trick: https://css-tricks.com/centering-percentage-widthheight-elements/ */
const ImageContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: -50px;
`

Image = styled.img`
  filter: drop-shadow(-4px 5px 5px rgba(0, 0, 0, 0.6));
  height: 200px;
`

/* The div that holds the text that will be revealed */
/* Same centering trick */
/* Places this below the image container */
const TextContainer = styled.div`
  text-transform: uppercase;
  white-space:nowrap;
  position: absolute;
  width: 100px;
  overflow: visible;
  z-index: 1;
`

export default ({ text = "Animation" }) => {
  const $image = useRef(null)
  const $text = useRef(null)
  useEffect(() => {
    let scaleAnim = anime({
      targets: $image.current,
      scale: [0, 1],
      easing: "easeInQuad"
    })
    let progress = { length: 0 }
    scaleAnim.finished.then(() => {
      anime({
        targets: progress,
        length: text.length,
        easing: "cubicBezier(.5,.5,0,1)",
        round: 1,
        update: () =>
          ($text.current.children[0].innerHTML = text.slice(
            0,
            Math.floor(progress.length)
          ))
      })
      anime({
        targets: $image.current,
        translateX: "90%",
        easing: "cubicBezier(.5,.5,0,1)"
      })
    })
  })

  return (
    <Container>
      <ImageContainer ref={$image}>
        <Image
          src="https://jesperekstrom.com/wp-content/uploads/2018/11/Wordpress-folder-purple.png"
          alt="wordpress-folder-icon"
        />
      </ImageContainer>
      <TextContainer ref={$text}>
        <h1 />
      </TextContainer>
    </Container>
  )
}
