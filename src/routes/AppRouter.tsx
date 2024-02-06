import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTE_ADMIN_CONFIG_URL, ROUTE_ADMIN_PANEL_URL, ROUTE_AREA_URL, ROUTE_DEPARTMENT_URL, ROUTE_HOME_URL, ROUTE_LOGIN_URL, ROUTE_OCCUPATION_URL, ROUTE_PAYROLL_LIST_URL, ROUTE_REGISTER_URL, ROUTE_WORKERS_TEMPLATE_URL } from "../constants/routes/routes"

import AdminPanelPage from "../pages/admin/AdminPanelPage"
import AreaPage from "../pages/area/AreaPage"
import { AuthProvider } from "../contexts/AuthContext"
import ConfigPage from "../pages/admin/config/ConfigPage"
import DepartmentPage from "../pages/departamento/DepartmentPage"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/auth/LoginPage"
import OccupationPage from "../pages/cargo/OccupationPage"
import PayrollPage from "../pages/nomina/PayrollPage"
import RegisterPage from "../pages/auth/RegisterPage"
import WorkersTemplatePage from "../pages/plantilla/WorkersTemplatePage"

const AppRouter = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTE_LOGIN_URL} element={<LoginPage />} />
                    <Route path={ROUTE_REGISTER_URL} element={<RegisterPage />} />
                    <Route path={ROUTE_HOME_URL} element={<HomePage />} />
                    <Route path={ROUTE_PAYROLL_LIST_URL} element={<PayrollPage />} />
                    <Route path={ROUTE_ADMIN_PANEL_URL} element={<AdminPanelPage />} />
                    <Route path={ROUTE_WORKERS_TEMPLATE_URL} element={<WorkersTemplatePage />} />
                    <Route path={ROUTE_DEPARTMENT_URL} element={<DepartmentPage />} />
                    <Route path={ROUTE_AREA_URL} element={<AreaPage />} />
                    <Route path={ROUTE_OCCUPATION_URL} element={<OccupationPage />} />
                    <Route path={ROUTE_ADMIN_CONFIG_URL} element={<ConfigPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default AppRouter
