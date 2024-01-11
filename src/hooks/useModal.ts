import { useRef } from "react"

export function useModal(): [React.LegacyRef<HTMLDialogElement>, () => void, () => void] {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const closeModal = () => {
        dialogRef.current?.close()
    }

    const openModal = () => {
        dialogRef.current?.showModal()
    }
    
    return [dialogRef, openModal, closeModal]
}