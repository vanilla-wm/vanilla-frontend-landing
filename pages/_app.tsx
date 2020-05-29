import App from 'next/app'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
// import { DefaultSeo } from 'next-seo'
import GlobalStyle from 'assets/globalStyles'
import theme from 'theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          {/* <DefaultSeo
            titleTemplate="Vit Bokisch | %s"
            site_name="Vit Bokisch - Personal website"
            openGraph={{
              type: 'website',
              locale: 'en_US',
              url: 'https://bokisch.com',
              site_name: 'Vit Bokisch',
              description: 'My personal webpage',
              images: [
                {
                  url: 'https://bokisch.com/static/og-image.jpg',
                  width: 800,
                  height: 600,
                  alt: 'Og Image Alt',
                },
              ],
            }}
            twitter={{
              handle: '@vitbokisch',
              site: '@vitbokisch',
              creator: '@vitbokisch',
              cardType: 'summary',
              title: 'Vit Bokisch - Resume',
              description: "Hi I'm Vit!",
            }}
          /> */}
          <GlobalStyle />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    )
  }
}
