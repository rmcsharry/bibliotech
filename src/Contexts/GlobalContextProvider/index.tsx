import React, { useState, useEffect } from 'react'
import { FirebaseContext, AuthUserContext } from '../Firebase'
import Firebase from 'gatsby-plugin-firebase'
import { FavouritesContext } from '../Favourites'

const FirebaseProvider: React.FC<{}> = ({ children }) => {
  return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>
}

const GlobalContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const [favourites, setFavourites] = useState([])

  const getFavourites = user => {
    const favouriteRef = Firebase.database().ref(`users/${user.uid}/favourites`)
    favouriteRef.on(
      'value',
      function (snapshot) {
        setFavourites(snapshot.val())
      },
      function (errorObject) {
        console.log('The read failed: ' + errorObject.code)
        alert('Could not read your favourites from server. Error: ' + errorObject.code)
      },
    )
  }

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      setAuthUser(user)
      getFavourites(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {}, [])

  return (
    <FirebaseProvider>
      <AuthUserContext.Provider value={authUser}>
        <FavouritesContext.Provider value={favourites}>{children}</FavouritesContext.Provider>
      </AuthUserContext.Provider>
    </FirebaseProvider>
  )
}

export default GlobalContextProvider
