import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

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

export default ({ children, pageTitle }) => {
  const finalPageTitle = pageTitle
    ? `${pageTitle} - `
    : ""

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {            
              title
              navigationItems {
                path
                name  
              }
            }
          }
        }
      `}
      render={ data => (
        <MainWrapper>
            <Helmet>
              <meta charset="utf-8" />
              <title>{finalPageTitle + data.site.siteMetadata.title}</title>
            </Helmet>
            <Logo title={data.site.siteMetadata.title} />
            <Navigation items={data.site.siteMetadata.navigationItems} />      
            <BodyWrapper>
              {children}
            </BodyWrapper>
        </MainWrapper>
      )}
    />
  )
}