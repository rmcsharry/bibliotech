import React, { useState, useEffect } from 'react'
import { FirebaseContext, AuthUserContext } from '../Firebase'
import Firebase from 'gatsby-plugin-firebase'
import { FavoritesContext } from '../Favorites'
import WaitSpinner from '../../components/WaitSpinner'
import EmailNotVerified from '../../components/EmailNotVerfied'
import { navigate } from 'gatsby'

const FirebaseProvider: React.FC<{}> = ({ children }) => {
  return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>
}

const GlobalContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const [isVerified, setIsVerified] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [isAuthStateChecked, setAuthStateChecked] = useState(false)

  const getFavorites = user => {
    if (!user) return
    if (typeof window !== 'undefined') {
      const favouriteRef = Firebase.database().ref(`users/${user.uid}/favorites`)
      favouriteRef.on(
        'value',
        function (snapshot) {
          setFavorites(snapshot.val())
        },
        function (errorObject) {
          console.log('The read failed: ' + errorObject.code)
        },
      )
    }
  }

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      if (Date.parse(user?.metadata.creationTime) > Date.parse('2020-07-26') && !user?.emailVerified) {
        setAuthUser(user)
        setIsVerified(false)
        setAuthStateChecked(true)
        // user.sendEmailVerification()
      } else {
        setAuthUser(user)
        setIsVerified(true)
        getFavorites(user)
        setAuthStateChecked(true)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {}, [])

  return (
    <>
      {isAuthStateChecked ? (
        <>
          {isVerified ? (
            <FirebaseProvider>
              <AuthUserContext.Provider value={authUser}>
                <FavoritesContext.Provider value={favorites}>{children}</FavoritesContext.Provider>
              </AuthUserContext.Provider>
            </FirebaseProvider>
          ) : (
            <EmailNotVerified authUser={authUser}></EmailNotVerified>
          )}
        </>
      ) : (
        <WaitSpinner text="Loading Data..."></WaitSpinner>
      )}
    </>
  )
}

export default GlobalContextProvider
