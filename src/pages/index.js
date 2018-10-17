import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import 'antd/lib/button/style/index.css'

import Layout from '../components/layout'
// import Button from '../components/button'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button type="dashed" size="large"> Click me </Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
