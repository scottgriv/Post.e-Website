/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import faviconIco from "../images/favicon.ico"
import appleIcon from "../images/home-icon.png"
import favicon16 from "../images/favicon-16x16.png"
import favicon32 from "../images/favicon-32x32.png"
import favicon64 from "../images/favicon-64x64.png"
import favicon128 from "../images/favicon-128x128.png"
import favicon180 from "../images/favicon-180x180.png"
import favicon192 from "../images/favicon-192x192.png"
import favicon512 from "../images/favicon-512x512.png"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet>
      <title>Post.e</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="/images/main/banner_social.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="/images/main/banner_social.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <meta key="apple-mobile-web-app-capable" name="apple-mobile-web-app-capable" content="yes" />
      <meta key="apple-mobile-web-app-status-bar-style" name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta key="theme-color" name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      {/* Favicon icons */}
      <link rel="icon" type="image/x-icon" href={faviconIco} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="64x64" href={favicon64} />
      <link rel="icon" type="image/png" sizes="128x128" href={favicon128} />
      <link rel="icon" type="image/png" sizes="180x180" href={favicon180} />
      <link rel="icon" type="image/png" sizes="192x192" href={favicon192} />
      <link rel="icon" type="image/png" sizes="512x512" href={favicon512} />

      {/* App install (not a favicon) */}
      <link rel="apple-touch-icon" href={appleIcon} />

      {children}
    </Helmet>
  )
}

export default Seo
