import React from 'react'
import Firebase from 'gatsby-plugin-firebase'

const FirebaseContext = React.createContext(null)

const FirebaseProvider: React.FC<{}> = ({ children }) => {
  return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>
}

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
)

export default FirebaseProvider

export { FirebaseContext }
