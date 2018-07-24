import React from 'react'
import { Link } from 'gatsby'

import Layout from './layout'
import Heading from './Heading'

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
const versions = [1, 2, 3]

const Sample = ({ version }) => (
  <Layout>
    <Heading version={version} />
    <h1 style={styles.h1}>Granby House of Prayer</h1>
    <p style={styles.p}>Version: {version || 1}</p>
    {versions.map(version => (
      <Link style={styles.about} to={version == 1 ? '/' : `/v${version}`}>
        Version {version}
      </Link>
    ))}
  </Layout>
)

export default Sample
