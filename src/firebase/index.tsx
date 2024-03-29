import React from 'react'

const FirebaseContext = React.createContext(null)
const AuthUserContext = React.createContext(null)

export const withFirebase = Component => props => {
  return <FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
}
export const withAuthentication = Component => props => {
  return <AuthUserContext.Consumer>{user => <Component {...props} authUser={user} />}</AuthUserContext.Consumer>
}

export { FirebaseContext, AuthUserContext }
