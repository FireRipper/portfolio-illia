import React from 'react'
import NextNprogress from 'nextjs-progressbar'

function PortfolioApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#1890ff"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

export default PortfolioApp
