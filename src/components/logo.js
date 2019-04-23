import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../assets/gatsby.svg"

const LogoLink = styled(Link)`
  text-shadow: none;
  background-image: none;
`

const LogoContainer = styled.div`
  display: inline-block;
`
const LogoHeader = styled.h3`
  color: gray;
  text-decoration: none;
  display: inline-block;
  width: 200px;
  line-height: 65px;
`

const LogoImage = styled.img`
  width: 65px;
  height: 65px;
  margin-right: 1rem;
  display: inline-block;
  float: left;
`

export default (props) => (
  <LogoLink to="/">
    <LogoContainer>
      <LogoImage src={logo} />
      <LogoHeader>{props.title}</LogoHeader>
    </LogoContainer>
  </LogoLink>
)
