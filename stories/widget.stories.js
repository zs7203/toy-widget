import React from "react"
import { storiesOf } from "@storybook/react"

import { Center } from "../src/components/Tools"
import List from "../src/components/List"
import Modal from "../src/components/Modal"

storiesOf("animating widgets", module)
  //   .addDecorator(story => <Center>{story}</Center>)
  .add("swiping list", () => (
    <Center>
      <List />
    </Center>
  ))
  .add("Modal", () => (
    <Center>
      <Modal />
    </Center>
  ))
