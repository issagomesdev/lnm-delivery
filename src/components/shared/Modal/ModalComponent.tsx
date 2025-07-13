'use client'

import { Overlay, ModalBox, Content, ButtonGroup, CancelButton, ConfirmButton } from './styles'
import { ReactNode } from 'react'

type ModalConfirmProps = {
  isOpen: boolean
  onClose?: () => void
  onConfirm?: () => void
  onConfirmText?: string
  title?: string
  children?: ReactNode
  width?: number
}

export default function ModalComponent({ isOpen, onClose, onConfirm, onConfirmText = 'Confirmar', title, children, width }: ModalConfirmProps) {
  if (!isOpen) return null

  return (
    <Overlay>
      <ModalBox width={width}>
        {title && <h2>{title}</h2>}
        <Content>{children}</Content>
        <ButtonGroup>
          {onClose && <CancelButton onClick={onClose}>Cancelar</CancelButton>}
          {onConfirm && <ConfirmButton onClick={onConfirm}>{onConfirmText}</ConfirmButton> }
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  )
}
