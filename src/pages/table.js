import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout pageTitle="Temperature Data">
      <h1>Temperature Data</h1>    
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Temperature</th>              
          </tr>
        </thead>
        <tbody>
          {data.allGoogleSheetSheet1Row.edges.map( ( { node }, i) => (
            <tr key={"tr_" + i}>
              <td>
                <em>{node.name}</em>
              </td>
              <td>{node.age}</td>
              <td>{`${node.temperature} °C`}</td>
            </tr>
          ))}
          </tbody>
        </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allGoogleSheetSheet1Row {
      edges {
        node {
          name
          age
          temperature
        }
      }
    }
  }
`

