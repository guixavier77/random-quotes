'use client'
import Modal from '@/components/Modal'
import { useToggle } from '@/hooks/useToggle.t'
import React from 'react'

const Page = () => {
  const { openModal, closeModal, modal } = useToggle()
  function handleCloseModal(
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ) {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }
  return (
    <div
      className={`after: after: flex h-screen items-center justify-center overflow-hidden  after:absolute after:left-0 after:top-0 after:h-screen after:w-full after:bg-slate-900 after:content-[''] ${
        modal ? 'after:blur-sm' : ''
      }`}
      onClick={(e) => handleCloseModal(e)}
    >
      <button
        onClick={openModal}
        className={` z-10 rounded-sm bg-blue-600 px-10 py-4 text-white ${
          modal ? 'hidden' : 'flex '
        }  `}
      >
        Pop-over
      </button>
      {modal ? <Modal close={closeModal} /> : ''}
    </div>
  )
}

export default Page
