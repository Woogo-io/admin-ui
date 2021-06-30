import React, { ReactChildren } from 'react'

const MainContainer = ({children}: { children: ReactChildren}) => {
  return (
    <main className="h-full overflow-y-auto">
      {children}
    </main>
  )
}

export default MainContainer
