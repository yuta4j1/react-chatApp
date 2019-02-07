import * as React from 'react'
import Header from './Header'

const App = (): JSX.Element => {
    const logoTitle = 'chat room';
  return (
      <Header value={logoTitle} />
  )
}

export default App;