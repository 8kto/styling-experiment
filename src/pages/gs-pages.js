import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import CatHeader from '../components/CatHeader'

export default ({ data }) => (
  <Layout pageTitle="Template">
    <h1>List of GS Pages</h1>
    <CatHeader title="Yaaay!" />
    <p>Choose your desired page.</p>
    <ul>
      {data.allGsPage.edges.map((edge, index) => 
        <li key={index}>
          <Link to={`gs-pages/${edge.node.url}/`}>
            {edge.node.title}
          </Link>
        </li>
      )}
    </ul>
  </Layout>
)

export const query = graphql`
  query{
    allGsPage {
      edges {
        node {
          title        
          url
        }
      }
    }
  }
`