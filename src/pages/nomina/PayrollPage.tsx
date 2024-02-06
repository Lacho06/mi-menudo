import Navbar from '../../components/Navbar';
import Table from './../../components/Table';

const PayrollPage = () => {
    const heads = ['ID', 'Nombre', 'Salario', 'Vacaciones (9.09%)', 'Fondo de salario base', 'Fuerza de trabajo (5%)', 'Seguridad social (12.5%)', 'Provicion (1.5%)', 'Total gasto', 'Acciones']

    const getCells = () => {
        return [
            [
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: "",
                    value: ''
                },
                {
                    type: 'actions',
                    isInput: true
                }
            ]
        ]
    }

    return (
        <div>
            <Navbar className='mb-4' />
            <main className='grid grid-cols-12'>
                <aside className='col-span-2'>Options</aside>
                <section className='col-span-8 px-3 overflow-x-auto'>
                    <Table 
                        title='Nomina' 
                        heads={heads}
                        cells={getCells()} 
                        withPlugins
                    ></Table>
                </section>
                <aside className='col-span-2'>Options</aside>
            </main>
        </div>
    )
}

export default PayrollPage
