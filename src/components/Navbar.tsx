import { APP_NAME } from '../constants/app';
const Navbar = ({ className = '' }: { className?: string }) => {
    return (
        <nav className={`flex items-center justify-between z-50 p-5 shadow-md shadow-primary-400 bg-primary-200 ${className}`}>
            <h2 className="text-2xl text-accent-600 font-extrabold">{ APP_NAME }</h2>
            <div className="flex items-center gap-4">
                <p className="font-bold text-accent-600">Usuario1</p>
                <img src="../../src/assets/icons/user.svg" alt="Image user" />
            </div>
        </nav>
    )
}

export default Navbar
