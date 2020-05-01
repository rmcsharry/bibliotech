import React, { useState, useEffect } from 'react'
import { FirebaseContext, AuthUserContext } from '../Firebase'
import Firebase from 'gatsby-plugin-firebase'
import ModalContextProvider from '../ModalContext'

const FirebaseProvider: React.FC<{}> = ({ children }) => {
  return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>
}

const GlobalContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => setAuthUser(user))
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {}, [])

  return (
    <FirebaseProvider>
      <AuthUserContext.Provider value={authUser}>
        <ModalContextProvider>{children}</ModalContextProvider>
      </AuthUserContext.Provider>
    </FirebaseProvider>
  )
}

export default GlobalContextProvider
