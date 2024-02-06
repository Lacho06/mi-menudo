import { ROUTE_ADMIN_PANEL_URL, ROUTE_AREA_URL } from '../../constants/routes/routes';
import { useReducer, useState } from 'react';

import { AreaActionType } from '../../constants/types/area';
import BannerAdmin from '../../components/BannerAdmin';
import BreadCrumbs from '../../components/BreadCrumbs';
import FormModal from '../../components/modals/FormModal';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';
import { areas as allAreas } from '../../mokups/areas';
import { areaReducer } from './../../hooks/reducers/areaReducer';
import { useModal } from '../../hooks/useModal';

const AreaPage = () => {
    const [newArea, setNewArea] = useState<{ id?: number, name: string }>({
        id: undefined,
        name: ''
    })
    const [areas, dispatch] = useReducer(areaReducer, allAreas)

    const handleSubmit = () => {
        // TODO problemas con el id
        dispatch({ type: AreaActionType.ADD, payload: { id: newArea.id || allAreas.length+1, ...newArea } })
        setNewArea({
            id: undefined,
            name: ''
        })
    }

    const heads = ['ID', 'Nombre', 'Acciones']
    const getCells = () => {
        return areas.map((area, index) => {
            return [
                {
                    type: "",
                    value: area.id?.toString() || index+1
                },
                {
                    type: "",
                    value: area.name
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
                        <BreadCrumbs links={[{name: 'Inicio', url: ROUTE_ADMIN_PANEL_URL}, {name: 'Areas', url: ROUTE_AREA_URL}]} />
                        <button className='bg-accent-400 text-secondary-300 px-2' onClick={openModal}>Agregar area</button>
                    </nav>
                    <FormModal title='Agregar area' dialogRef={dialogRef} closeModal={closeModal} closeButton submitButtonName='Agregar' submitAction={ handleSubmit }>
                        <input type="text" value={newArea.name || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewArea({ ...newArea, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                    </FormModal>
                    <div className='overflow-x-auto'>
                        <Table heads={heads} title='Departamentos' cells={getCells()} withPlugins></Table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AreaPage
