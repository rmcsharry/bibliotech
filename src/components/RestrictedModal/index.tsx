import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ModalContext } from '../../Contexts/ModalContext'

interface IProps {
  isShowModal: boolean
}

const RestrictedModal: React.FC = () => {
  const [isShow, setShow] = useState(false)

  const handleClose = toggle => {
    toggle()
  }

  return (
    <ModalContext.Consumer>
      {({ isModalOpen, toggleModal }) => (
        <>
          {setShow(isModalOpen)}
          <Modal show={isShow} onHide={() => handleClose(toggleModal)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose(toggleModal)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => handleClose(toggleModal)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </ModalContext.Consumer>
  )
}

export default RestrictedModal
