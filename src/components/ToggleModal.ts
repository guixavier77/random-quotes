import { useState } from 'react'

export const useToggle = () => {
  const [modal, setModal] = useState<boolean>(false)
  const ToggleModal = () => {
    setModal((state) => !state)
  }
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  return { openModal, closeModal, modal, ToggleModal }
}
