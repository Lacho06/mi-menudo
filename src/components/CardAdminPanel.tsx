import { Link } from "react-router-dom"

const CardAdminPanel = ({ className = "", icon, name, url }: { className?: string, icon: string, name: string, url: string }) => {
    return (
        <Link to={url} className={`${className} flex relative items-center justify-center w-full h-20 col-span-12 text-xl font-bold rounded-md shadow-sm cursor-pointer bg-accent-500 sm:col-span-6 md:col-span-3 hover:scale-95 shadow-accent-800 hover:border-2 hover:border-secondary-500`}>
            {name}
            <img src={icon} className="w-10 opacity-10 scale-125 absolute bottom-4 right-4" alt="Icono panel admin" />
        </Link>
    )
}

export default CardAdminPanel