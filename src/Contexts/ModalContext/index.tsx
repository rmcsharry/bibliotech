import React, { useState, useEffect } from 'react'

const defaultState = {
  isModalOpen: false,
  toggleModal: e => {},
}

export const ModalContext = React.createContext(defaultState)

const ModalContextProvider: React.FC = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggle = (e?: any) => {
    console.log('toggle', e)
    e && e.preventDefault()
    setModalOpen(!isModalOpen)
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal: toggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
