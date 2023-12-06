import { ReactNode } from "react"

const FormAuth = ({ submitAction, children }: { submitAction: () => void, children: ReactNode }) => {
    
    return (
        <form onSubmit={submitAction} className="flex flex-col items-center w-full gap-6 p-4 sm:gap-8 sm:w-3/5">
            { children }
        </form>
    )
}

export default FormAuth
