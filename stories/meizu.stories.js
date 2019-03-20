import React from "react"
import { storiesOf } from "@storybook/react"
import { createGlobalStyle } from "styled-components"

import { CurtainDemo } from "../src/components/meizu/Curtain"
import SloganPanel, {
  SmallLetterBoxDemo,
  SmallLetterListDemo,
  LargeLetterBoxDemo,
  LargeLetterListDemo,
  Action
} from "../src/components/meizu/Slogan"
import { Centered } from "../src/components/Tools"
import Phone from "../src/components/meizu/Phone"
import IntroPanel from "../src/components/meizu/IntroPanel"

const Background = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
  *{
    box-sizing: border-box;
  }
`

storiesOf("Meizu", module)
  .addDecorator(story => (
    <Centered
      style={{
        backgroundColor: "#152632",
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
      }}
    >
      <Background />
      {story()}
    </Centered>
  ))
  .add("widget - Curtain", () => <CurtainDemo />)
  .add("widget - Single Small Letter", () => <SmallLetterBoxDemo />)
  .add("widget - Single Large Letter", () => <LargeLetterBoxDemo />)
  .add("widget - Small Letter List", () => <SmallLetterListDemo />)
  .add("widget - Large Letter List", () => <LargeLetterListDemo />)
  .add("widget - Action", () => <Action />)
  .add("widget - Phone", () => <Phone />)
  .add("module - Slogan Panel", () => <SloganPanel />)

storiesOf("Meizu", module).add("module - ALL", () => (
  <>
    <Background />
    <IntroPanel />
  </>
))
