import { useReducer, useState } from 'react';
import { workers as allWorkers } from '../../mokups/workers';
import { workersReducer } from '../../hooks/reducers/workersReducer';
import { WorkerActionType } from '../../constants/types/worker';
import BannerAdmin from '../../components/BannerAdmin';
import Navbar from '../../components/Navbar';
import Swal from 'sweetalert2';

const WorkersTemplatePage = () => {
    const [workers, dispatch] = useReducer(workersReducer, allWorkers)
    const [newWorker, setNewWorker] = useState<{ name: string, salary: number }>({
        name: '',
        salary: 0
    })

    const openModal = () => {
        Swal.fire("Modal")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!e.target)return null
        dispatch({ type: WorkerActionType.ADD, payload: newWorker })
        setNewWorker({
            name: '',
            salary: 0
        })
    }


    return (
        <>
            <Navbar className='sticky top-0' />
            <div className='grid grid-cols-12'>
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 md:col-span-10 md:px-2 md:py-4 grid grid-cols-12 gap-4 md:gap-8'>
                    <div className='col-span-12 md:col-span-6 overflow-x-scroll'>
                        <table className='overflow-hidden rounded-md shadow-md shadow-primary-700'>
                            <thead>
                                <tr className='text-black bg-light-primary-800 border-y border-x border-primary-700'>
                                    <th colSpan={4}>Plantilla de trabajadores</th>
                                </tr>
                                <tr className='text-black bg-light-primary-800 border-b border-primary-700'>
                                    <th className='w-1/12 border-x border-primary-700 hover:bg-light-primary-800'>ID</th>
                                    <th className='w-1/6 border-x border-primary-700 hover:bg-light-primary-800'>Nombre</th>
                                    <th className='w-1/12 border-x border-primary-700 hover:bg-light-primary-800'>Salario</th>
                                    <th className='w-1/12 border-x border-primary-700 hover:bg-light-primary-800'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    workers
                                    ?
                                    workers.map(worker => {
                                        return (<tr key={worker.id} className='border-b border-primary-700'>
                                            <td className='border-x border-primary-700 text-center'>{ worker.id }</td>
                                            <td className='border-x border-primary-700 text-center'>{ worker.name }</td>
                                            <td className='border-x border-primary-700 text-center'>{ worker.salary }</td>
                                            <td className='border-x border-primary-700 text-center'>
                                                <button onClick={openModal}>Editar</button>
                                                <button onClick={() => dispatch({ type: WorkerActionType.DELETE, payload: worker })}>Eliminar</button>
                                            </td>
                                        </tr>)
                                    })
                                    :
                                    <tr className='border-b border-primary-700'>
                                        <td colSpan={4} className='border-x border-primary-700 text-center'>No se encontraron trabajadores registrados</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-span-12 md:col-span-6 flex flex-col items-center'>
                        <h3 className='font-bold mb-4'>Agregar trabajador</h3>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
                            <input type="text" value={newWorker.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                            <input type="number" value={newWorker.salary} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value})} name='salary' placeholder='Salario' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                            <button className='rounded-md bg-light-primary-800 font-bold px-3 py-1 shadow-sm shadow-light-primary-800 hover:scale-95 hover:bg-light-primary-600 w-full'>Enviar</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WorkersTemplatePage
