import React from 'react'

const FavoritesContext = React.createContext(null)

export const withFavorites = Component => props => {
  return (
    <FavoritesContext.Consumer>{favorites => <Component {...props} favorites={favorites} />}</FavoritesContext.Consumer>
  )
}

export { FavoritesContext }
