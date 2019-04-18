import React from "react"
import { Link } from "gatsby"

const links = [
  { path: "/", name: "Home" },
]

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
  </li>  
)

const MenuContents = links.map( (link, index) => {
  return <ListLink key={index} to={link.path}>{link.name}</ListLink>
})

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Styling Experiment</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
          {MenuContents}            
      </ul>
      <div style={{ marginTop: `2rem` }}>
        {children}
      </div>
  </div>
)