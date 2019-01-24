import React from "react"
import { storiesOf } from "@storybook/react"

import { Center } from "../src/components/Tools"
import Blick from "../src/components/Blick"

storiesOf("simple effects", module).add("blink", () => (
  <Center>
    <Blick />
  </Center>
))
