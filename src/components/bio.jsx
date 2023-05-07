import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          siteDescription
          social
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const siteDescription = data.site.siteMetadata?.siteDescription

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
      }}
    >
      {author && (
        <div style={{ textAlign: 'right' }}>
          <div>
            <Trans>Written by</Trans> <strong>{author}</strong>
          </div>
          <div>{siteDescription || null}</div>
        </div>
      )}
    </div>
  )
}

export default Bio
