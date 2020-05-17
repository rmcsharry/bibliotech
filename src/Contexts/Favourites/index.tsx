import React from 'react'

const FavouritesContext = React.createContext(null)

export const withFavourites = Component => props => {
  return (
    <FavouritesContext.Consumer>
      {favourites => <Component {...props} favourites={favourites} />}
    </FavouritesContext.Consumer>
  )
}

export { FavouritesContext }
