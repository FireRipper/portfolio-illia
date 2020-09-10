import React from 'react'
import BaseLayout from '../components/layouts/base.layout'
import Link from 'next/link'
import axios from 'axios'

const Portfolios = ({ posts }) => {
  const renderPost = (posts) => {
    return posts.map(({ id, title, body }) => (
      <li key={id}>
        <Link href={'/portfolios/[id]'} as={`/portfolios/${id}`}>
          <a>
            {title}
          </a>
        </Link>
      </li>
    ))
  }

  return (
    <BaseLayout>
      <h1>Portfolios page</h1>
      <ol>
        {renderPost(posts)}
      </ol>
    </BaseLayout>
  )
}

Portfolios.getInitialProps = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = res.data
    return { posts: posts.slice(0, 10), error: null }
  } catch (err) {
    console.error(err)
    return { posts: [], error: err.message }
  }
}

export default Portfolios
