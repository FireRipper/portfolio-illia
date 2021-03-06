import React from 'react'
import Header from '@/components/shared/header'

const BaseLayout = ({ children, className }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout
