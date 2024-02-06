import { ROUTE_ADMIN_PANEL_URL, ROUTE_DEPARTMENT_URL } from '../../constants/routes/routes';
import { useReducer, useState } from 'react';

import BannerAdmin from '../../components/BannerAdmin';
import BreadCrumbs from '../../components/BreadCrumbs';
import { DepartmentActionType } from '../../constants/types/department';
import FormModal from '../../components/modals/FormModal';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';
import { departments as allDepartments } from '../../mokups/departments';
import { departmentReducer } from '../../hooks/reducers/departmentReducer';
import { useModal } from '../../hooks/useModal';

const DepartmentPage = () => {
    const [newDepartment, setNewDepartment] = useState<{ id?: number, name: string, areaId?: number }>({
        id: undefined,
        name: '',
        areaId: undefined
    })
    const [departments, dispatch] = useReducer(departmentReducer, allDepartments)

    const handleSubmit = () => {
        // TODO problemas con el id
        dispatch({ type: DepartmentActionType.ADD, payload: { id: newDepartment.id || allDepartments.length+1, areaId: newDepartment.areaId || 1, ...newDepartment } })
        setNewDepartment({
            id: undefined,
            name: '',
            areaId: undefined
        })
    }

    const heads = ['ID', 'Nombre', 'Area', 'Acciones']
    const getCells = () => {
        return departments.map((department, index) => {
            return [
                {
                    type: "",
                    value: department.id?.toString() || index+1
                },
                {
                    type: "",
                    value: department.name
                },
                {
                    type: "",
                    value: department.areaId?.toString()
                },
                {
                    type: 'actions',
                    isInput: true
                }
            ]
        })
    }
    const [dialogRef, openModal, closeModal] = useModal()

    return (
        <>
            <Navbar className='sticky top-0' />
            <div className='grid grid-cols-12'>
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 md:col-span-10 md:px-2 md:py-4 flex flex-col gap-4 md:gap-10'>
                    <nav className='flex justify-between items-center bg-accent-800 py-4 px-2'>
                        <BreadCrumbs links={[{name: 'Inicio', url: ROUTE_ADMIN_PANEL_URL}, {name: 'Departamentos', url: ROUTE_DEPARTMENT_URL}]} />
                        <button className='bg-accent-400 text-secondary-300 px-2' onClick={openModal}>Agregar departamento</button>
                    </nav>
                    <FormModal title='Agregar departamento' dialogRef={dialogRef} closeModal={closeModal} closeButton submitButtonName='Agregar' submitAction={ handleSubmit }>
                        <input type="text" value={newDepartment.name || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewDepartment({ ...newDepartment, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                        <input type="text" value={newDepartment.areaId || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewDepartment({ ...newDepartment, [e.target.name]: e.target.value})} name='areaId' placeholder='Area' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                    </FormModal>
                    <div className='overflow-x-auto'>
                        <Table heads={heads} title='Departamentos' cells={getCells()} withPlugins></Table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default DepartmentPage
