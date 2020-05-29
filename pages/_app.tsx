import App from 'next/app'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import GlobalStyle from 'assets/globalStyles'
import theme from 'theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <DefaultSeo
            titleTemplate="Vanilla | %s"
            description="Vanilla - Protect your Web Monetized content with Vanilla"
          />
          <GlobalStyle />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    )
  }
}
