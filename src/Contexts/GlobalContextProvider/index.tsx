import React, { useState, useEffect } from 'react'
import { FirebaseContext, AuthUserContext } from '../Firebase'
import Firebase from 'gatsby-plugin-firebase'
import { FavoritesContext } from '../Favorites'

const FirebaseProvider: React.FC<{}> = ({ children }) => {
  return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>
}

const GlobalContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const [favorites, setFavorites] = useState([])

  const getFavorites = user => {
    if (!user) return
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

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      setAuthUser(user)
      getFavorites(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {}, [])

  return (
    <FirebaseProvider>
      <AuthUserContext.Provider value={authUser}>
        <FavoritesContext.Provider value={favorites}>{children}</FavoritesContext.Provider>
      </AuthUserContext.Provider>
    </FirebaseProvider>
  )
}

export default GlobalContextProvider
