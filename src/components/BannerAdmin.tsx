import { ROUTE_ADMIN_PANEL_URL, ROUTE_AREA_URL, ROUTE_DEPARTMENT_URL, ROUTE_OCCUPATION_URL, ROUTE_WORKERS_TEMPLATE_URL } from "../constants/routes/routes"

import BannerMenuItem from './BannerMenuItem';
import { IStyle } from "../constants/interfaces/interfaces"

interface IBannerAdmin extends IStyle, React.PropsWithChildren{}

const BannerAdmin = ({ className = "", children }: IBannerAdmin) => {
    return (
        <aside className={`hidden md:inline min-h-screen h-full pt-5 bg-secondary-300 ${className}`}>
            <nav className='sticky flex flex-col items-center gap-4 text-white top-[15%]'>
                <h2>Panel administrativo</h2>
                <hr className="w-2/3 mb-4 text-white" />
                <ul className="flex flex-col gap-4">
                    <BannerMenuItem name="Inicio" url={ROUTE_ADMIN_PANEL_URL} icon="../../src/assets/icons/models-white.svg" />
                    <BannerMenuItem name="Plantilla" url={ROUTE_WORKERS_TEMPLATE_URL} icon="../../src/assets/icons/workers-template-white.svg" />
                    <BannerMenuItem name="Departamentos" url={ROUTE_DEPARTMENT_URL} icon="../../src/assets/icons/departments-white.svg" />
                    {/* TODO: cambiar icono */}
                    <BannerMenuItem name="Areas" url={ROUTE_AREA_URL} icon="../../src/assets/icons/business-position-white.svg" />
                    <BannerMenuItem name="Cargos" url={ROUTE_OCCUPATION_URL} icon="../../src/assets/icons/business-position-white.svg" />
                    { children }
                </ul>
            </nav>
        </aside>
    )
}

export default BannerAdmin
