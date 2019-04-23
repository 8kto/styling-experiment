import React from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Logo from "./logo"

const MainWrapper = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

const BodyWrapper = styled.div`
  margin-top: 2rem;
`

export default ({ children }) => (
  <MainWrapper>
      <Logo />
      <Navigation />      
      <BodyWrapper>
        {children}
      </BodyWrapper>
  </MainWrapper>
)