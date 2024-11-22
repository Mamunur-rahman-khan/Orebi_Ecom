import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`mx-auto max-w-headerContainer ${className}`}>{children}</div>
  )
}

export default Container