import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
  const page = data.gsPage
  return (
    <Layout pageTitle="Template">
      <h1>{page.title}</h1>
      <h4><em>Google Sheet imported data</em></h4>
      <p>{page.description}</p>      
      <table>
        <thead>
          <tr>
            {page.table.header.map((header_title, index) => 
              <th key={index}>{header_title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {page.table.data.map((values, row_index) => 
            <tr key={`row${row_index}`}>
              {values.map((value, col_index) =>  
                <td key={`col${row_index}_${col_index}`}>
                  {value}
                </td>
              )}
            </tr>            
          )}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query($gsId: String!) {
    gsPage(id: { eq: $gsId }) {
      title
      description
      table {
        header
        data
      }
    }
  }
`