"use client"

import { type ElementRef, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"

export function Modal() {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<"dialog">>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
    console.log("Modal mounted")
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementsByTagName("body")[0],
  )
}
