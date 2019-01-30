import React from "react"
import { storiesOf } from "@storybook/react"

import { Centered } from "../src/components/Tools"
import List from "../src/components/popmotion/List"
import Modal from "../src/components/popmotion/Modal"
import ReversingEasingCurve from "../src/components/popmotion/ReversingEasingCurve"

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
  .add("ReversingEasingCurve", () => (
      <ReversingEasingCurve />
  ))
