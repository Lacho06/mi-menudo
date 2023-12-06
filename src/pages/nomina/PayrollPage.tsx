import Navbar from '../../components/Navbar';
import TableHead from '../../components/TableHead';

const PayrollPage = () => {
    return (
        <div>
            <Navbar className='mb-4' />
            <main className='grid grid-cols-12'>
                <aside className='col-span-2'>Options</aside>
                <section className='col-span-8 px-3'>
                    <div className='overflow-hidden rounded-md shadow-md border-x border-y border-primary-700 shadow-primary-700'>
                        <table>
                            <thead>
                                <tr className='text-black bg-light-primary-800 border-b border-primary-700'>
                                    <th colSpan={9}>Nomina</th>
                                </tr>
                                <tr className='text-black bg-light-primary-900 border-b border-primary-700'>
                                    <TableHead name='ID' />
                                    <TableHead name='Nombre' />
                                    <TableHead name='Salario' />
                                    <TableHead name='Vacaciones (9.09%)' />
                                    <TableHead name='Fondo de salario base' />
                                    <TableHead name='Fuerza de trabajo (5%)' />
                                    <TableHead name='Seguridad social (12.5%)' />
                                    <TableHead name='Provicion (1.5%)' />
                                    <TableHead name='Total gasto' />
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b border-primary-700'>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="text" placeholder="-" className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" readOnly placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" readOnly placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" readOnly placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" readOnly placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" readOnly placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />
                                    </td>
                                    <td className='w-1/12 border-x border-primary-700'>
                                        <input type="number" readOnly placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full p-0 m-0 text-center border-none hover:bg-primary-900 focus:outline-1 focus:outline-light-primary-800 caret-light-primary-100' />            
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <aside className='col-span-2'>Options</aside>
            </main>
        </div>
    )
}

export default PayrollPage
