import { ROUTE_ADMIN_PANEL_URL, ROUTE_OCCUPATION_URL } from "../../constants/routes/routes";
import { useReducer, useState } from "react"

import BannerAdmin from "../../components/BannerAdmin"
import BreadCrumbs from "../../components/BreadCrumbs";
import FormModal from "../../components/modals/FormModal";
import Navbar from "../../components/Navbar"
import { OccupationActionType } from "../../constants/types/occupation";
import Table from "../../components/Table";
import { occupations as allOccupations } from '../../mokups/occupations';
import { occupationReducer } from '../../hooks/reducers/occupationReducer';
import { useModal } from "../../hooks/useModal";

const OccupationPage = () => {
    const [newOccupation, setNewOccupation] = useState<{ name: string }>({
        name: ''
    })
    const [occupations, dispatch] = useReducer(occupationReducer, allOccupations)

    const handleSubmit = () => {
        dispatch({ type: OccupationActionType.ADD, payload: newOccupation })
        setNewOccupation({
            name: ''
        })
    }

    const heads = ['ID', 'Nombre', 'Acciones']
    const getCells = () => {
        return occupations.map((occupation, index) => {
            return [
                {
                    type: "",
                    value: occupation.id?.toString() || index+1
                },
                {
                    type: "",
                    value: occupation.name
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
            <div className="grid grid-cols-12">
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 md:col-span-10 md:px-2 md:py-4 flex flex-col gap-4 md:gap-10'>
                    <nav className='flex justify-between items-center bg-accent-800 py-4 px-2'>
                        <BreadCrumbs links={[{name: 'Inicio', url: ROUTE_ADMIN_PANEL_URL}, {name: 'Cargos', url: ROUTE_OCCUPATION_URL}]} />
                        <button className='bg-accent-400 text-secondary-300 px-2' onClick={openModal}>Agregar cargo</button>
                    </nav>
                    <FormModal title='Agregar cargo' dialogRef={dialogRef} closeModal={closeModal} closeButton submitButtonName='Agregar' submitAction={ handleSubmit }>
                        <input type="text" value={newOccupation.name || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewOccupation({ ...newOccupation, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-light-primary-800 text-xl p-1 rounded-md focus:outline-light-primary-600' />
                    </FormModal>
                    <div className='overflow-x-scroll'>
                        <Table heads={heads} title='Cargos' cells={getCells()} withPlugins></Table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OccupationPage
