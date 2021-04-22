/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SeoType } from "types";

const SEO: React.FC<SeoType> = ({ description, lang, title, image, author, date, slug, type }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )

  const { pathname } = useLocation();
  const isArticle = type === "article";

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaImage = image || site.siteMetadata.image
  const metaAuthor = author || site.siteMetadata.author
  const metaUrl = slug ? `${site.siteMetadata.siteUrl}${pathname}` : site.siteMetadata.siteUrl

  const schemaOrg = {
    "@context": "http://schema.org",
    "@type": "Article",
    author: {
      "@type": "Person",
      name: metaAuthor,
    },
    copyrightHolder: {
      "@type": "Person",
      name: metaAuthor,
    },
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: metaAuthor,
    },
    publisher: {
      "@type": "Organization",
      name: metaAuthor,
      logo: {
        "@type": "ImageObject",
        url: metaImage,
      },
    },
    datePublished: date,
    description: metaDescription,
    headline: metaTitle,
    url: metaUrl,
    name: metaTitle,
    image: {
      "@type": "ImageObject",
      url: metaImage,
    },
    mainEntityOfPage: metaUrl,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata?.author || "",
        },
        {
          name: "twitter:title",
          content: metaTitle,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]}
    >
      <title>{metaTitle}</title>
      <script data-ad-client="ca-pub-6628628466268276" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      {isArticle && <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>}\
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "2bd8976300b840faae07e9a2aa6f3f40"}'></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "id",
  description: "",
  type: "website"
}

export default SEO
