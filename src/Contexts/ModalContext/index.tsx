import React, { useState } from 'react'
import RestrictedModal from '../../components/RestrictedModal'

const defaultState = {
  isModalOpen: false,
  toggleModal: () => {},
}

// interface IProps {
//   isModalOpen: boolean
//   openModal: any
//   closeModal: any
// }

export const ModalContext = React.createContext(defaultState)

const ModalContextProvider: React.FC = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggle = () => {
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
