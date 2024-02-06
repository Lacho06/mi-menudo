import { ROUTE_ADMIN_CONFIG_URL, ROUTE_ADMIN_PANEL_URL } from "../../../constants/routes/routes"

import BannerAdmin from "../../../components/BannerAdmin"
import BreadCrumbs from "../../../components/BreadCrumbs"
import Navbar from "../../../components/Navbar"

const ConfigPage = () => {
    return (
        <>
            <Navbar className='sticky top-0' />
            <div className='grid grid-cols-12'>
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 md:col-span-10 md:px-2 md:py-4 flex flex-col gap-4 md:gap-10'>
                    <nav className='flex justify-between items-center bg-accent-800 py-4 px-2'>
                        <BreadCrumbs links={[{name: 'Inicio', url: ROUTE_ADMIN_PANEL_URL}, {name: 'Configuraciones', url: ROUTE_ADMIN_CONFIG_URL}]} />
                        {/* <button className='bg-accent-400 text-secondary-300 px-2' onClick={openModal}>Agregar trabajador</button> */}
                    </nav>
                    {/* <FormModal title='Agregar trabajador' dialogRef={dialogRef} closeModal={closeModal} closeButton submitButtonName='Agregar' submitAction={ () => handleSubmit() }>
                        <input type="text" value={newWorker.name || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.ci || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='ci' placeholder='CI' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.account || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='account' placeholder='Cuenta bancaria' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.salary || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='salary' placeholder='Salario' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.workedHours || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='workedHours' placeholder='Horas trabajadas' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                    </FormModal>
                    <div className='overflow-x-auto'>
                        <Table heads={heads} title='Plantilla de trabajadores' cells={getCells()} withPlugins></Table>
                    </div> */}
                </section>
            </div>
        </>
    )
}

export default ConfigPage