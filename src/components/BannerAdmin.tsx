import { Link } from "react-router-dom"
import { ROUTE_ADMIN_PANEL_URL, ROUTE_DEPARTMENT_URL, ROUTE_OCCUPATION_URL, ROUTE_WORKERS_TEMPLATE_URL } from "../constants/routes/routes"

const BannerAdmin = ({ className = "" }: { className?: string }) => {
    return (
        <aside className={`hidden md:inline h-screen bg-secondary-300 ${className}`}>
            <nav className='flex flex-col items-center h-full gap-4 py-5 text-white'>
                <h2>Panel administrativo</h2>
                <hr className="text-white w-2/3 mb-4" />
                <ul className="flex flex-col gap-4">
                    <li className="hover:text-accent-400"><Link to={ROUTE_ADMIN_PANEL_URL}>Inicio</Link></li>
                    <li className="hover:text-accent-400"><Link to={ROUTE_WORKERS_TEMPLATE_URL}>Gestionar plantilla</Link></li>
                    <li className="hover:text-accent-400"><Link to={ROUTE_DEPARTMENT_URL}>Gestionar departamentos</Link></li>
                    <li className="hover:text-accent-400"><Link to={ROUTE_OCCUPATION_URL}>Gestionar cargo</Link></li>
                </ul>
            </nav>
        </aside>
    )
}

export default BannerAdmin
