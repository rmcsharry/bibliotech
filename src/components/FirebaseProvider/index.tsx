import React, { useState, useEffect } from 'react'
import Firebase from 'gatsby-plugin-firebase'

const FirebaseContext = React.createContext(null)
const AuthUserContext = React.createContext(null)

const FirebaseProvider: React.FC<{}> = ({ children }) => {
  return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>
}

// const AuthUserProvider: React.FC<{}> = ({ children }) => {
//   const [authUser, setAuthuser] = useState(null)
//   return <AuthUserContext.Provider value={authUser}>{children}</AuthUserContext.Provider>
// }

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
)
export const withAuthentication = Component => props => (
  <AuthUserContext.Consumer>{authUser => <Component {...props} authUser={authUser} />}</AuthUserContext.Consumer>
)

export { FirebaseContext, FirebaseProvider }

const GlobalContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => setAuthUser(user))
    console.log('USER CHANGED', authUser)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <FirebaseContext.Provider value={Firebase}>
      <AuthUserContext.Provider value={authUser}>{children}</AuthUserContext.Provider>
    </FirebaseContext.Provider>
  )
}

export default GlobalContextProvider
