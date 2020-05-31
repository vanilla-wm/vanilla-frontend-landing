import App from 'next/app'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/globalStyles'
import theme from 'theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    )
  }
}
