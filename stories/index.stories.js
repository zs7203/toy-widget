import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Button, Welcome } from "@storybook/react/demo"

storiesOf("Welcome", module).add("intro", () => (
  <main>
    <h1>Weclome to my toy-widget repo!</h1>
    <p>
      A place to collect all my animating widgets, implemented with <b>React,
      styled-components & react-pose</b>.
    </p>
    <i>Small code snippets really, but good enough to try something new and fun 😀 😎 👍 💯.</i>
  </main>
))
