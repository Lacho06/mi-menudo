import { useReducer, useState } from "react"
import BannerAdmin from "../../components/BannerAdmin"
import Navbar from "../../components/Navbar"
import Swal from "sweetalert2";
import { occupations as allOccupations } from '../../mokups/occupations';
import { occupationReducer } from '../../hooks/reducers/occupationReducer';
import { OccupationActionType } from "../../constants/types/occupation";

const OccupationPage = () => {
    const [newOccupation, setNewOccupation] = useState<{ name: string }>({
        name: ''
    })
    const [occupations, dispatch] = useReducer(occupationReducer, allOccupations)

    const openModal = () => {
        Swal.fire("Modal")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!e.target)return null
        dispatch({ type: OccupationActionType.ADD, payload: newOccupation })
        setNewOccupation({
            name: ''
        })
    }
    return (
        <>
            <Navbar className='sticky top-0' />
            <div className="grid grid-cols-12">
                <BannerAdmin className='md:col-span-2' />
                <section className='col-span-12 md:col-span-10 md:px-2 md:py-4 grid grid-cols-12 gap-4 md:gap-8'>
                    <div className='col-span-12 md:col-span-6 overflow-x-scroll'>
                        <table className='overflow-hidden rounded-md shadow-md shadow-primary-700'>
                            <thead>
                                <tr className='text-black bg-light-primary-800 border-y border-x border-primary-700'>
                                    <th colSpan={3}>Cargos</th>
                                </tr>
                                <tr className='text-black bg-light-primary-800 border-b border-primary-700'>
                                    <th className='w-1/12 border-x border-primary-700 hover:bg-light-primary-800'>ID</th>
                                    <th className='w-1/6 border-x border-primary-700 hover:bg-light-primary-800'>Nombre</th>
                                    <th className='w-1/12 border-x border-primary-700 hover:bg-light-primary-800'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    occupations
                                    ?
                                    occupations.map(occupation => {
                                        return (<tr key={occupation.id} className='border-b border-primary-700'>
                                            <td className='border-x border-primary-700 text-center'>{ occupation.id }</td>
                                            <td className='border-x border-primary-700 text-center'>{ occupation.name }</td>
                                            <td className='border-x border-primary-700 text-center'>
                                                <button onClick={openModal}>Editar</button>
                                                <button onClick={() => dispatch({ type: OccupationActionType.DELETE, payload: occupation })}>Eliminar</button>
                                            </td>
                                        </tr>)
                                    })
                                    :
                                    <tr className='border-b border-primary-700'>
                                        <td colSpan={3} className='border-x border-primary-700 text-center'>No se encontraron cargos registrados</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-span-12 md:col-span-6 flex flex-col items-center'>
                        <h3 className='font-bold mb-4'>Agregar cargo</h3>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
                            <input type="text" value={newOccupation.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewOccupation({ ...newOccupation, [e.target.name]: e.target.value})} name='name' placeholder='Nombre' className='border-2 outline-green-200 text-xl p-1 rounded-md focus:outline-green-400' />
                            <button className='rounded-md bg-light-primary-800 font-bold px-3 py-1 shadow-sm shadow-light-primary-800 hover:scale-95 hover:bg-light-primary-600 w-full'>Enviar</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OccupationPage
