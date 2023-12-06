import { ROUTE_DEPARTMENT_URL, ROUTE_WORKERS_TEMPLATE_URL } from '../../constants/routes/routes';

import BannerAdmin from '../../components/BannerAdmin';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Table from './../../components/Table';

const AdminPanelPage = () => {
    const tableHeads = ["1", "2", "3"]
    const tableCells = [ {isInput: true, type: "number", className: undefined, value: undefined}, {isInput: true, type: "number", className: undefined, value: undefined}, {isInput: true, type: "number", className: undefined, value: undefined}, {isInput: true, type: "number", className: undefined, value: undefined}, {isInput: true, type: "number", className: undefined, value: undefined}, {isInput: true, type: "number", className: undefined, value: undefined} ]
    return (
        <>
            <Navbar className='sticky top-0 mb-0' />
            <main className='grid grid-cols-12'>
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 bg-light-primary-600 md:col-span-10'>
                    <div className='grid grid-cols-12 gap-4 px-4 py-6'>
                        <Link to={ROUTE_WORKERS_TEMPLATE_URL} className='flex items-center justify-center w-full h-20 col-span-12 text-xl font-bold bg-accent-800 rounded-md shadow-sm cursor-pointer sm:col-span-6 md:col-span-3 hover:scale-95 shadow-accent-800'>
                            Gestionar plantilla
                        </Link>
                        <Link to={ROUTE_DEPARTMENT_URL} className='flex items-center justify-center w-full h-20 col-span-12 text-xl font-bold bg-accent-800 rounded-md shadow-sm cursor-pointer sm:col-span-6 md:col-span-3 hover:scale-95 shadow-accent-800'>
                            Gestionar departamentos
                        </Link>
                        <Link to={ROUTE_WORKERS_TEMPLATE_URL} className='flex items-center justify-center w-full h-20 col-span-12 text-xl font-bold bg-accent-800 rounded-md shadow-sm cursor-pointer sm:col-span-6 md:col-span-3 hover:scale-95 shadow-accent-800'>
                            Gestionar cargos
                        </Link>
                        <Link to={ROUTE_WORKERS_TEMPLATE_URL} className='flex items-center justify-center w-full h-20 col-span-12 text-xl font-bold bg-accent-800 rounded-md shadow-sm cursor-pointer sm:col-span-6 md:col-span-3 hover:scale-95 shadow-accent-800'>
                            Gestionar modelos
                        </Link>
                    </div>
                    <section>
                        <Table title='Prenomina' heads={ tableHeads } cells={ tableCells } className='mx-3'></Table>
                    </section>
                </section>
            </main>
        </>
    )
}

export default AdminPanelPage
