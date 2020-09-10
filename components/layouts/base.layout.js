import Header from '../shared/header'

const BaseLayout = ({ children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BaseLayout
