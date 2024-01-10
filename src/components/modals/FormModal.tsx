import { IStyle } from "../../constants/interfaces/interfaces"
import Modal from "./Modal"

interface FormModal extends React.PropsWithChildren, IStyle {
    title?: string,
    toggleModal: boolean,
    setToggleModal: (value: boolean) => void,
    closeButton?: boolean,
    submitAction?: () => void,
    submitButtonName?: string,
    closeButtonName?: string
}

const FormModal = ({ className = "", children, toggleModal, setToggleModal, title, submitAction = () => {}, submitButtonName = "Enviar", closeButton = false, closeButtonName = "Cancelar" }: FormModal) => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!e.target) return null
        submitAction()
        setToggleModal(false)
    }

    return (
        <Modal className={className} title={title} toggleModal={toggleModal}>
            <form className='flex flex-col items-center gap-2' onSubmit={submit}>
                { children }
                <div className="flex justify-center gap-2 mt-8 text-white font-bold">
                    <button type="submit" className="bg-green-400 px-5 py-1 rounded-md shadow-md outline-none shadow-green-600">{ submitButtonName }</button>
                    {
                        closeButton && <button type="button" className="bg-red-400 px-5 py-1 rounded-md shadow-md outline-none shadow-red-600" onClick={ () => setToggleModal(false) }>{ closeButtonName }</button>
                    }
                </div>
            </form>
        </Modal>
    )
}

export default FormModal