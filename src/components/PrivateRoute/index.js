// import ...
import React, { Component } from 'react'
import { navigate } from 'gatsby'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (false && location.pathname !== `/app/login`) {
    navigate('/app/login')
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
