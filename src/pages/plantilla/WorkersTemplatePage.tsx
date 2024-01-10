import { useReducer, useState } from 'react';

import BannerAdmin from '../../components/BannerAdmin';
import Navbar from '../../components/Navbar';
import Table from './../../components/Table';
import { WorkerActionType } from '../../constants/types/worker';
import { workers as allWorkers } from '../../mokups/workers';
import { workersReducer } from '../../hooks/reducers/workersReducer';
import FormModal from '../../components/modals/FormModal';
import BreadCrumbs from './../../components/BreadCrumbs';

const WorkersTemplatePage = () => {
    const initialWorker = {
        id: undefined,
        name: '',
        ci: undefined,
        account: undefined,
        workedHours: undefined,
        salary: undefined
    }

    const [workers, dispatch] = useReducer(workersReducer, allWorkers)
    const [newWorker, setNewWorker] = useState(initialWorker)

    const handleSubmit = () => {
        dispatch({ type: WorkerActionType.ADD, payload: newWorker })
        setNewWorker(initialWorker)
        setToggleModal(false)
    }

    const heads = ['ID', 'Nombre', 'CI', 'Cuenta bancaria', 'Salario', 'H. Trab', 'Acciones']
    const getCells = () => {
        return workers.map((worker, index) => {
            return [
                {
                    type: "",
                    value: worker.id?.toString() || index+1
                },
                {
                    type: "",
                    value: worker.name
                },
                {
                    type: "",
                    value: worker.ci?.toString()
                },
                {
                    type: "",
                    value: worker.account?.toString()
                },
                {
                    type: "",
                    value: worker.salary?.toString()
                },
                {
                    type: "",
                    value: worker.workedHours?.toString()
                },
                {
                    type: 'actions',
                    isInput: true
                }
            ]
        })
    }
    const [toggleModal, setToggleModal] = useState(false)

    return (
        <>
            <Navbar className='sticky top-0' />
            <div className='grid grid-cols-12'>
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 md:col-span-10 md:px-2 md:py-4 flex flex-col gap-4 md:gap-12'>
                    <nav className='flex justify-between items-center bg-accent-800 py-4 px-2'>
                        <BreadCrumbs />
                        <button className='bg-accent-400 text-secondary-300 px-2' onClick={() => setToggleModal(true)}>Agregar trabajador</button>
                    </nav>
                    <FormModal title='Agregar trabajador' toggleModal={toggleModal} setToggleModal={setToggleModal} closeButton submitButtonName='Agregar' submitAction={ () => handleSubmit() }>
                        <input type="text" value={newWorker.name || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.ci || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='ci' placeholder='CI' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.account || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='account' placeholder='Cuenta bancaria' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.salary || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='salary' placeholder='Salario' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="number" value={newWorker.workedHours || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='workedHours' placeholder='Horas trabajadas' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                    </FormModal>
                    <div className='overflow-x-auto'>
                        <Table heads={heads} title='Plantilla de trabajadores' cells={getCells()} withPlugins></Table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WorkersTemplatePage
