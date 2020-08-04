import React, { useState, useEffect } from 'react'
import { Star, StarFill } from 'react-bootstrap-icons/'
import { withFirebase } from '../../contexts/firebase'
import { style } from 'typestyle'

const HeartStyle = style({
  paddingTop: '1rem',
  paddingRight: '1rem',
  cursor: 'Pointer',
})

interface IProps {
  firebase: any
  manufacturerId: string
  favorites: Array<string>
  isAlreadyFavorite
}

const FavoriteButton: React.FC<IProps> = ({ firebase, manufacturerId, favorites, isAlreadyFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const userId = firebase.auth().currentUser?.uid

  useEffect(() => {
    setIsFavorite(isAlreadyFavorite)
  }, [isAlreadyFavorite])

  const onFavoriteClick = event => {
    event.stopPropagation()

    const messagesRef = firebase.database().ref(`users/${userId}`)
    messagesRef.set(buildFavorites(), error => firebaseCallback(error))
  }

  const buildFavorites = () => {
    if (!favorites) return { favorites: [manufacturerId] }

    if (isAlreadyFavorite) {
      favorites = favorites.filter(element => element !== manufacturerId)
      setIsFavorite(false)
    } else {
      favorites.push(manufacturerId)
      setIsFavorite(true)
    }

    return {
      favorites: favorites,
    }
  }

  const firebaseCallback = error => {
    if (error) {
      alert('Failed to update favorites. ERROR: ' + error)
      console.log('FIREBASE ERROR: ', error)
    }
  }

  return (
    <div className="row no-gutters">
      <div className="col d-flex flex-row-reverse">
        <span className={HeartStyle} onClick={event => onFavoriteClick(event)}>
          {isFavorite ? <StarFill size="26" color="gold" /> : <Star size="26" />}
        </span>
      </div>
    </div>
  )
}

export default withFirebase(FavoriteButton)
