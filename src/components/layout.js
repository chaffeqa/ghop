import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
import './layout.css'

const LayoutStyles = {}
// {
//   margin: '0 auto',
//   maxWidth: 960,
//   padding: '0px 1.0875rem 1.45rem',
//   paddingTop: 0,
// }

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title="GHOP v2"
          meta={[
            { name: 'description', content: 'Granby House of Prayer' },
            { name: 'keywords', content: 'house of prayer, ghop' },
          ]}
        />
        <div style={LayoutStyles}>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
