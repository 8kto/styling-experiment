import React from 'react'

import CatHeader from '../components/CatHeader'

import Layout from '../components/layout'

export default () => (
  <Layout pageTitle="Home">
    <h1>Homepage.</h1>

    <CatHeader title="Yaaay!" />

    <p> This is homepage. </p>
  </Layout>
)
