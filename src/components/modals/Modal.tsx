import { IStyle } from './../../constants/interfaces/interfaces';
import { useModal } from "../../hooks/useModal";

interface Modal extends React.PropsWithChildren, IStyle {
    title?: string,
    toggleModal: boolean,
    acceptButton?: boolean,
    closeButton?: boolean,
    acceptAction?: () => void,
    acceptButtonName?: string,
    closeButtonName?: string
}

const Modal = ({ className = "", children, title, toggleModal, acceptButton = false, acceptAction = () => {}, acceptButtonName = "Hecho", closeButton = false, closeButtonName = "Cancelar" }: Modal) => {
    const [dialogRef, closeModal] = useModal(toggleModal)
    
    return (
        <dialog ref={dialogRef} className={`${className} min-w-[500px] min-h-[200px] py-5 px-20 shadow-lg rounded-md outline outline-1 outline-primary-700 shadow-primary-400`}>
            <div className="w-full min-h-[150px] flex flex-col items-center gap-8">
                { title && <h2 className="font-bold">{ title }</h2> }
                {children}
                {
                    (acceptButton && closeButton) && (
                        <div className="flex justify-center gap-2 mt-auto text-white font-bold">
                            {
                                acceptButton && <button className="bg-green-400 px-5 py-1 rounded-md shadow-md outline-none shadow-green-600" onClick={ () => { acceptAction(); closeModal(); } }>{ acceptButtonName }</button>
                            }
                            {
                                closeButton && <button className="bg-red-400 px-5 py-1 rounded-md shadow-md outline-none shadow-red-600" onClick={ closeModal }>{ closeButtonName }</button>
                            }
                        </div>
                    )
                }
            </div>
        </dialog>
    )
}

export default Modal