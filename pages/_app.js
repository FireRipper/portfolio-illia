import React from 'react'
import NextNprogress from 'nextjs-progressbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'

const PortfolioApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

PortfolioApp.getInitialProps = async ({ Component, ctx }) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default PortfolioApp
