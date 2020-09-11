import React from 'react'
import BaseLayout from '@/components/layouts/base.layout'
import BasePage from '@/components/base-page'
import Link from 'next/link'
import { useGetPosts } from '@/actions'



const Portfolios = () => {
  const { data, error, loading } = useGetPosts()

  const renderPost = (posts) => {
    return posts.map(({ id, title, body }) => (
      <li key={id}>
        <Link href='/portfolios/[id]' as={`/portfolios/${id}`}>
          <a>
            {title}
          </a>
        </Link>
      </li>
    ))
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1>Portfolios page</h1>
        {
          loading &&
          <p>Loading data...</p>
        }
        <ol>
          {
            data &&
            renderPost(data)
          }
        </ol>
        {
          error &&
          <div className='alert alert-danger'>{error.error}</div>
        }
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios
