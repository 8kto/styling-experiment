import * as React from "react"
import { Link } from "gatsby"
import { Match } from "@reach/router"
import styled from "styled-components"

import './navigation.scss'

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
        <ListItem isActive={props.match} className="Link">
          <StyledLink to={pathTo}>{children}</StyledLink>
        </ListItem> 
      )}       
    </Match>
  )
}

export default (props) => (
  <Container className="Container">
      { props.items.map( (link, index) => { 
        return <ListLink key={index} to={link.path}>{link.name}</ListLink>
      })}
  </Container>
)