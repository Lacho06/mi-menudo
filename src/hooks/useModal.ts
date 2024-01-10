import { useEffect, useRef } from "react"

export function useModal(initialValue = true): [React.LegacyRef<HTMLDialogElement>, () => void, () => void] {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const closeModal = () => {
        dialogRef.current?.close()
    }

    const openModal = () => {
        dialogRef.current?.showModal()
    }

    useEffect(() => {
        if(initialValue){
            openModal()
        }else{
            closeModal()
        }
    }, [initialValue])
    
    return [dialogRef, openModal, closeModal]
}