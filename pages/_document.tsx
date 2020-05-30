import React, { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
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
          <meta charSet="utf-8" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="google" content="notranslate" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, viewport-fit=cover"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          {this.props.styleTags}
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta
            name="msapplication-TileImage"
            content="/static/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          {/* <link rel="manifest" href="/static/manifest.json" /> */}
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}
