const FormInputAuth = ({ icon, type, name, text, placeholder }: { icon: string, type: string, name: string, text: string, placeholder: string }) => {
    return (
        <div className="flex flex-col w-full gap-4 form-input-container">
            <label htmlFor={name} className="text-sm font-extrabold text-light-primary-200">{text}</label>
            <div className="flex gap-4 px-5 py-1 rounded-full shadow-md">
                <img src={icon} width="30" height="30" alt="Icon" />
                <input type={type} id={name} name={name} placeholder={placeholder} className="w-full caret-light-primary-600 focus:outline-offset-2 focus:outline-light-primary-600 form-input" />
            </div>
        </div>
    )
}

export default FormInputAuth
