import CardHome from '../components/CardHome';
import Navbar from '../components/Navbar';
import { ROUTE_PAYROLL_LIST_URL } from "../constants/routes/routes"

function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex mt-5">
                <main className="grid grid-cols-12 gap-4 mx-auto">
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="N&oacute;mina" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="Inventario" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="Activo fijo" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="Finanza" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="Caja y banco" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="Costo" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="Contabilidad general" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                    <CardHome url={ROUTE_PAYROLL_LIST_URL} name="Facturaci&oacute;n" icon="../../src/assets/icons/payroll.svg" className="col-span-3" />
                </main>
            </div>
        </>
    )
}

export default HomePage
