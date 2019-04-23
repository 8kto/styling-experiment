import React from "react"
import { Link } from "gatsby"
import { Match } from "@reach/router"
import styled from "styled-components"

const links = [
  { path: "/", name: "Home" },
  { path: "/about/", name: "About Us" },
]

const ListItem = styled.li`
  display: inline-block;    
  margin-left: 0.5rem;
  background: ${ props => !props.isActive ? "white" : "#734C9E" };
  color: ${ props => !props.isActive ? "black" : "white" }; 
`

const Container = styled.li`
  list-style: none;
  float: right; 
  margin-top: 0.75rem;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: inline-block;
  padding: 0.4rem 0.6rem;
`

const ListLink = props => {
  const { to: pathTo, children } = props  
  return (
    <Match path={pathTo}>
      { props => (
        <ListItem isActive={props.match}>
          <StyledLink to={pathTo}>{children}</StyledLink>
        </ListItem> 
      )}       
    </Match>
  )
}

const MenuContents = links.map( (link, index) => {
  return <ListLink key={index} to={link.path}>{link.name}</ListLink>
})

export default () => (
  <Container>
      {MenuContents}            
  </Container>
)