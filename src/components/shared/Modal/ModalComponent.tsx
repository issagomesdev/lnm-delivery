'use client'

import modalStyles from './Modal.module.css'
import { ReactNode } from 'react'

type ModalConfirmProps = {
  isOpen: boolean
  onClose?: () => void
  onCloseText?: string
  onConfirm?: () => void
  onConfirmText?: string
  title?: string
  children?: ReactNode
  width?: number
  styles?: React.CSSProperties
}

export default function ModalComponent({ isOpen, onClose, onCloseText = 'Cancelar', onConfirm, onConfirmText = 'Confirmar', title, children, width, styles: stylesProp }: ModalConfirmProps) {
  if (!isOpen) return null

  return (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.modalBox} style={{ maxWidth: width ? `${width}px` : undefined }}>
        {title && <h2>{title}</h2>}
        <div className={modalStyles.content} style={stylesProp}>{children}</div>
        <div className={modalStyles.buttonGroup}>
          {onClose && <button className={modalStyles.cancelButton} onClick={onClose}>{onCloseText}</button>}
          {onConfirm && <button className={modalStyles.confirmButton} onClick={onConfirm}>{onConfirmText}</button>}
        </div>
      </div>
    </div>
  )
}
