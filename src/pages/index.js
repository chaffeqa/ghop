import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/Heading'

const styles = {
  h1: {
    height: '20vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    height: '5vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    height: '5vh',
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const IndexPage = () => (
  <Layout>
    <Heading />
    <h1 style={styles.h1}>Granby House of Prayer</h1>
    <p style={styles.p}>Work in progress.</p>
    <Link style={styles.about} to="/page-2/">
      About us
    </Link>
  </Layout>
)

export default IndexPage
