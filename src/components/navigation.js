import React from "react"
import { Link } from "gatsby"

const links = [
  { path: "/", name: "Home" },
  { path: "/about/", name: "About Us" },
]

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to} activeStyle={{fontWeight: "bold"}}>{props.children}</Link>
  </li>  
)

const MenuContents = links.map( (link, index) => {
  return <ListLink key={index} to={link.path}>{link.name}</ListLink>
})

export default () => (
  <ul style={{ listStyle: `none`, float: `right` }}>
      {MenuContents}            
  </ul>
)