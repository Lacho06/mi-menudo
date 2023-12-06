import { ROUTE_LOGIN_URL, ROUTE_REGISTER_URL } from "../constants/routes/routes"

import { Link } from "react-router-dom"

const NavAuth = ({ activeLink }: { activeLink: string }) => {
    const styleActiveLink = (activeLink: string, route: string) => {
        return activeLink === route ? 'text-light-primary-400 border-b-2 border-b-light-primary-600' : 'text-accent-400 hover:text-light-primary-400 hover:border-b-2 hover:border-b-light-primary-800'
    }
    return (
        <nav className="flex w-full p-4 sm:w-3/5 justify-evenly">
            <Link className={`w-full py-1 text-xl font-extrabold text-center sm:w-1/3 ${styleActiveLink(activeLink, ROUTE_LOGIN_URL)}`} to={ROUTE_LOGIN_URL}>Entrar</Link>
            <Link className={`w-full py-1 text-xl font-extrabold text-center sm:w-1/3 ${styleActiveLink(activeLink, ROUTE_REGISTER_URL)}`} to={ROUTE_REGISTER_URL}>Registrarse</Link>
        </nav>
    )
}

export default NavAuth
