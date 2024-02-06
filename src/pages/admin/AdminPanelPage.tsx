import { ROUTE_ADMIN_CONFIG_URL, ROUTE_DEPARTMENT_URL, ROUTE_OCCUPATION_URL, ROUTE_WORKERS_TEMPLATE_URL } from '../../constants/routes/routes';
import { tableCells, tableHeads } from '../../mokups/components/table';

import BannerAdmin from '../../components/BannerAdmin';
import BannerMenuItem from '../../components/BannerMenuItem';
import CardAdminPanel from './../../components/CardAdminPanel';
import Navbar from '../../components/Navbar';
import Table from './../../components/Table';

const AdminPanelPage = () => {
    return (
        <>
            <Navbar className='sticky top-0 mb-0' />
            <main className='grid grid-cols-12'>
                <BannerAdmin className='md:col-span-2'>
                    {/* TODO: cambiar icono */}
                    <BannerMenuItem name="Configuraciones" url={ROUTE_ADMIN_CONFIG_URL} icon="../../src/assets/icons/business-position-white.svg" />
                </BannerAdmin>
                <section className='col-span-12 md:col-span-10'>
                    <div className='grid grid-cols-12 gap-4 px-4 py-6'>
                        <CardAdminPanel url={ROUTE_WORKERS_TEMPLATE_URL} name='Gestionar plantilla' icon='../../src/assets/icons/workers-template.svg' />
                        <CardAdminPanel url={ROUTE_DEPARTMENT_URL} name='Gestionar departamentos' icon='../../src/assets/icons/departments.svg' />
                        <CardAdminPanel url={ROUTE_OCCUPATION_URL} name='Gestionar cargos' icon='../../src/assets/icons/business-position.svg' />
                        <CardAdminPanel url={ROUTE_WORKERS_TEMPLATE_URL} name='Gestionar modelos' icon='../../src/assets/icons/models.svg' />
                    </div>
                    <section className='mx-3'>
                        <h3 className='text-2xl font-bold'>Prenomina</h3>
                        <p>Desde <span>1/10/2023</span> hasta <span>31/10/2023</span></p>
                        <Table title='Dirección General' heads={ tableHeads } cells={ tableCells } className='my-5' withPlugins withTotals></Table>
                        <Table title='Grupo de gestión' heads={ tableHeads } cells={ tableCells } className='my-5' withTotals></Table>
                    </section>
                </section>
            </main>
        </>
    )
}

export default AdminPanelPage
