import React from "react"
import { storiesOf } from "@storybook/react"

import { Centered } from "../src/components/Tools"
import List from "../src/components/popmotion/List"
import Modal from "../src/components/popmotion/Modal"
import ReversingEasingCurve from "../src/components/popmotion/ReversingEasingCurve"
import RevealingText from "../src/components/popmotion/RevealingText"

storiesOf("animating widgets", module)
  //   .addDecorator(story => <Centered>{story}</Centered>)
  .add("swiping list", () => (
    <Centered>
      <List />
    </Centered>
  ))
  .add("Modal", () => (
    <Centered>
      <Modal />
    </Centered>
  ))
  .add("Reversing Easing Curve", () => <ReversingEasingCurve slides={slides} />)
  .add("Revealing Text", () => <RevealingText text={"hello oops!"} />)

const slides = [
  {
    heading: "Testimonial 1",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
    In est ante in nibh mauris cursus mattis molestie.`,
    cite: "AN Author"
  },
  {
    heading: "Testimonial 2",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
    In est ante in nibh mauris cursus mattis molestie.`,
    cite: "AN Author"
  },
  {
    heading: "Testimonial 3",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
    In est ante in nibh mauris cursus mattis molestie.`,
    cite: "AN Author"
  },
  {
    heading: "Testimonial 4",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
    In est ante in nibh mauris cursus mattis molestie.`,
    cite: "AN Author"
  }
]
