import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Styling Experiment</h3>
      </Link>
      <Navigation />      
      <div style={{ marginTop: `2rem` }}>
        {children}
      </div>
  </div>
)