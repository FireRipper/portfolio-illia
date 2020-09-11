import React from 'react'
import { Container } from 'reactstrap'

const BasePage = ({ clsName = '', children }) => {
  return (
    <div className={`base-page ${clsName}`}>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default BasePage
