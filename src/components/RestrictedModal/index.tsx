import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ModalContext } from '../../Contexts/ModalContext'

interface IProps {
  isShowModal: boolean
  toggle: (e?: any) => {}
}

const RestrictedModal: React.FC<IProps> = ({ isShowModal, toggle }) => {
  return (
    <Modal show={isShowModal} onHide={toggle} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={e => toggle(e)}>
          Close
        </Button>
        <Button variant="primary" onClick={e => toggle(e)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RestrictedModal
