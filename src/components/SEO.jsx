import React from 'react'
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby'

const description = `Dedicated to hosting the Presence of God, Granby House of Prayer is a place where beleivers can pursue and encounter God in a personal way.`
const title = `Granby House of Prayer`
const url = 'https://granbyhouseofprayer.com'
const image = 'https://granbyhouseofprayer.com/android-chrome-192x192.png'
const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: 'GHOP',
    },
  ]

  
const SEO = () => (
  <Helmet>
    {/* General tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="image" content={image} />
    
    <link rel="apple-touch-icon" sizes="180x180" href={withPrefix("/apple-touch-icon.png")} />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta name="theme-color" content="#ffffff" />

    {/* Schema.org tags */}
    <script type="application/ld+json">
      {JSON.stringify(schemaOrgJSONLD)}
    </script>

    {/* OpenGraph tags */}
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="1200" />
    
    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
)

export default SEO
