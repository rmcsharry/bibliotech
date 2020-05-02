import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { navigate } from 'gatsby'
import { style } from 'typestyle'

const RestrictedStyle = style({
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  margin: '0 !important',
  background: 'hsla(0, 0%, 0%, 0.85) !important',
  color: 'white',
  opacity: '1',
  animationName: 'fadeInOpacity',
  animationIterationCount: '1',
  animationTimingFunction: 'ease-in',
  animationDuration: '0.1s',
})
const RestrictedTitleStyle = style({
  borderTop: '1px solid red',
  borderBottom: '1px solid red',
  padding: '0.5rem 0.25rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

interface IProps {
  dismissCallback: () => void
}

const SmallCardRestricted: React.FC<IProps> = ({ dismissCallback }) => {
  const handleDismissClick = e => {
    e.stopPropagation()
    dismissCallback()
  }

  const handleSignUpClick = e => {
    e.stopPropagation()
    navigate('/sign_up')
  }

  return (
    <>
      <Card
        onClick={(event: React.MouseEvent<HTMLElement>) => handleDismissClick(event)}
        className={`${RestrictedStyle} card-small shadow bg-white m-2 m-md-3 m-xl-4`}
      >
        <div style={{ height: '14rem' }} className="mx-auto d-flex align-items-center"></div>
        <Card.Body className="d-flex flex-column mt-2 justify-content-end">
          <Card.Title className={`${RestrictedTitleStyle} font-weight-bold text-center text-danger`}>
            RESTRICTED
          </Card.Title>
          <div className="d-flex flex-grow-1 flex-column mb-4 mt-4 px-1 text-center">
            <h6 className="text-white">
              Please sign up
              <br />
              <br /> to <br />
              <br />
              view details
            </h6>
          </div>
          <Button className="btn-success" onClick={(event: React.MouseEvent<HTMLElement>) => handleSignUpClick(event)}>
            SIGN UP
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SmallCardRestricted
