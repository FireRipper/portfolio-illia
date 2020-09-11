import React from 'react'
import BaseLayout from '../components/layouts/base.layout'
import axios from 'axios'
import BasePage from '../components/base-page'

const Portfolio = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolio page</h1>
        <h2>{portfolio.title}</h2>
        <p>Body: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async ({ query }) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const post = res.data
    return { portfolio: post }
  } catch (err) {
    console.error(err.reason)
    return { portfolio: [], error: err }
  }
}

export default Portfolio
