import React from 'react'

const FirebaseContext = React.createContext(null)
const AuthUserContext = React.createContext(null)

// const FirebaseProvider: React.FC<{}> = ({ children }) => {
//   return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>
// }

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
)
export const withAuthentication = Component => props => (
  <AuthUserContext.Consumer>{authUser => <Component {...props} authUser={authUser} />}</AuthUserContext.Consumer>
)

export { FirebaseContext, AuthUserContext }
