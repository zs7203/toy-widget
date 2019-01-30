import React from "react"
import { storiesOf } from "@storybook/react"

import { Centered } from "../src/components/Tools"
import Blink from "../src/components/popmotion/Blick"
import Rotate from "../src/components/popmotion/Keyframes"

storiesOf("simple effects", module)
  .add("blink", () => (
    <Centered>
      <Blink />
    </Centered>
  ))
  .add("rotate", () => (
    <Centered>
      <Rotate />
    </Centered>
  ))
