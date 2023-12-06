import Navbar from '../../components/Navbar';
import BannerAdmin from '../../components/BannerAdmin';
import { departments as allDepartments } from '../../mokups/departments';
import Swal from 'sweetalert2';
import { useReducer, useState } from 'react';
import { departmentReducer } from '../../hooks/reducers/departmentReducer';
import { DepartmentActionType } from '../../constants/types/department';

const DepartmentPage = () => {
    const [newDepartment, setNewDepartment] = useState<{ id: number, name: string }>({
        id: 0,
        name: ''
    })
    const [departments, dispatch] = useReducer(departmentReducer, allDepartments)

    const openModal = () => {
        Swal.fire("Modal")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!e.target)return null
        dispatch({ type: DepartmentActionType.ADD, payload: newDepartment })
        setNewDepartment({
            id: 0,
            name: ''
        })
    }

    return (
        <>
            <Navbar />
            <div className='grid grid-cols-12'>
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 md:col-span-10 md:px-2 md:py-4 grid grid-cols-12 gap-4 md:gap-8'>
                <div className='col-span-12 md:col-span-6 overflow-x-scroll'>
                        <table className='overflow-hidden rounded-md shadow-md shadow-primary-700'>
                            <thead>
                                <tr className='text-black bg-light-primary-800 border-y border-x border-primary-700'>
                                    <th colSpan={3}>Departamentos</th>
                                </tr>
                                <tr className='text-black bg-light-primary-800 border-b border-primary-700'>
                                    <th className='w-1/12 border-x border-primary-700 hover:bg-light-primary-800'>ID</th>
                                    <th className='w-1/6 border-x border-primary-700 hover:bg-light-primary-800'>Nombre</th>
                                    <th className='w-1/12 border-x border-primary-700 hover:bg-light-primary-800'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    departments
                                    ?
                                    departments.map(department => {
                                        return (<tr key={department.id} className='border-b border-primary-700'>
                                            <td className='border-x border-primary-700 text-center'>{ department.id }</td>
                                            <td className='border-x border-primary-700 text-center'>{ department.name }</td>
                                            <td className='border-x border-primary-700 text-center'>
                                                <button onClick={openModal}>Editar</button>
                                                <button onClick={() => dispatch({ type: DepartmentActionType.DELETE, payload: department })}>Eliminar</button>
                                            </td>
                                        </tr>)
                                    })
                                    :
                                    <tr className='border-b border-primary-700'>
                                        <td colSpan={3} className='border-x border-primary-700 text-center'>No se encontraron departamentos registrados</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-span-12 md:col-span-6 flex flex-col items-center'>
                        <h3 className='font-bold mb-4'>Agregar departamento</h3>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
                            <input type="number" value={newDepartment.id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewDepartment({ ...newDepartment, [e.target.name]: e.target.value})} name='id' placeholder='ID' className='border-2 outline-green-200 text-xl p-1 rounded-md focus:outline-green-400' />
                            <input type="text" value={newDepartment.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewDepartment({ ...newDepartment, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-green-200 text-xl p-1 rounded-md focus:outline-green-400' />
                            <button className='rounded-md bg-light-primary-800 font-bold px-3 py-1 shadow-sm shadow-light-primary-800 hover:scale-95 hover:bg-light-primary-600 w-full'>Enviar</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default DepartmentPage
