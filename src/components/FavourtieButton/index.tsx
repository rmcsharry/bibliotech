import React, { useState, useEffect } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons/'
import { withFirebase } from '../../contexts/Firebase'
import { style } from 'typestyle'

const HeartStyle = style({
  paddingTop: '1rem',
  paddingRight: '1rem',
  cursor: 'Pointer',
})

interface IProps {
  firebase: any
  manufacturerId: string
  favourites: Array<string>
  isAlreadyFavourite
}

const FavouriteButton: React.FC<IProps> = ({ firebase, manufacturerId, favourites, isAlreadyFavourite }) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const userId = firebase.auth().currentUser?.uid

  useEffect(() => {
    setIsFavourite(isAlreadyFavourite)
  }, [isAlreadyFavourite])

  const onFavouriteClick = event => {
    event.stopPropagation()

    const messagesRef = firebase.database().ref(`users/${userId}`)
    messagesRef.set(buildFavourites(), error => firebaseCallback(error))
  }

  const buildFavourites = () => {
    if (!favourites) return { favourites: [manufacturerId] }

    if (isAlreadyFavourite) {
      favourites = favourites.filter(element => element !== manufacturerId)
      setIsFavourite(false)
    } else {
      favourites.push(manufacturerId)
      setIsFavourite(true)
    }

    return {
      favourites: favourites,
    }
  }

  const firebaseCallback = error => {
    if (error) {
      alert('Failed to update favourites. ERROR: ' + error)
      console.log('FIREBASE ERROR: ', error)
    }
  }

  return (
    <div className="row no-gutters">
      <div className="col d-flex flex-row-reverse">
        <span className={HeartStyle} onClick={event => onFavouriteClick(event)}>
          {isFavourite ? <HeartFill size="26" color="red" /> : <Heart size="26" />}
        </span>
      </div>
    </div>
  )
}

export default withFirebase(FavouriteButton)
