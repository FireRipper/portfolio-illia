import React from 'react'
import BaseLayout from '@/components/layouts/base.layout'
import BasePage from '@/components/base-page'
import { useGetPostById } from '@/actions'
import { useRouter } from 'next/router'

const Portfolio = () => {
  const router = useRouter()
  const { data: portfolio, error, loading } = useGetPostById(router.query.id)

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading data...</p>}
        {error && <div className='alert alert-danger'>{error.error}</div>}
        {
          portfolio &&
          <>
            <h1>{portfolio.title}</h1>
            <p>Body: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        }
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolio
