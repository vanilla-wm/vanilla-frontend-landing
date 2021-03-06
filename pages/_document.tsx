import React, { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Vanilla - Web Monetization Verifier</title>
          <meta charSet="utf-8" />
          <meta name="title" content="Vanilla - Web Monetization Verifier" />
          <meta
            name="description"
            content="Verify payment streams before showing exclusive content to users."
          />
          <meta
            name="keywords"
            content="Content, Creators, Cinnamon, Web, Monetization, Web Monetization, Interledger, Grant for the Web, Grant, Coil, Payments"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vanilla.so/" />
          <meta
            property="og:title"
            content="Vanilla - Web Monetization Verifier"
          />
          <meta
            property="og:description"
            content="Verify payment streams before showing exclusive content to users."
          />
          <meta
            property="og:image"
            content={require('assets/seo/open-graph.jpg?url')}
          />
          <meta
            property="twitter:card"
            content={require('assets/seo/twitter.jpg?url')}
          />
          <meta property="twitter:url" content="https://vanilla.so/" />
          <meta
            property="twitter:title"
            content="Vanilla - Web Monetization Verifier"
          />
          <meta
            property="twitter:description"
            content="Verify payment streams before showing exclusive content to users."
          />
          <meta
            property="twitter:image"
            content={require('assets/seo/twitter-og.jpg?url')}
          />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="google" content="notranslate" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=2, shrink-to-fit=no, viewport-fit=cover"
          />
          <meta name="monetization" content="$ilp.uphold.com/2Na6ff4BNePb" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-168106177-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'UA-168106177-1');
          `,
            }}
          />
          {this.props.styleTags}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={require('assets/favicon/apple-icon-57x57.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={require('assets/favicon/apple-icon-60x60.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={require('assets/favicon/apple-icon-72x72.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require('assets/favicon/apple-icon-76x76.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={require('assets/favicon/apple-icon-114x114.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={require('assets/favicon/apple-icon-120x120.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={require('assets/favicon/apple-icon-144x144.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={require('assets/favicon/apple-icon-152x152.png?url')}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={require('assets/favicon/apple-icon-180x180.png?url')}
          />
          {/* <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={require('assets/favicon/favicon-192x192.png')}
          /> */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require('assets/favicon/favicon-32x32.png?url')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={require('assets/favicon/favicon-96x96.png?url')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={require('assets/favicon/favicon-16x16.png?url')}
          />
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}
