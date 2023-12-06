import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTE_ADMIN_PANEL_URL, ROUTE_DEPARTMENT_URL, ROUTE_HOME_URL, ROUTE_LOGIN_URL, ROUTE_OCCUPATION_URL, ROUTE_PAYROLL_LIST_URL, ROUTE_REGISTER_URL, ROUTE_WORKERS_TEMPLATE_URL } from "../constants/routes/routes"
import { AuthProvider } from "../contexts/AuthContext"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import PayrollPage from "../pages/nomina/PayrollPage"
import AdminPanelPage from "../pages/admin/AdminPanelPage"
import WorkersTemplatePage from "../pages/plantilla/WorkersTemplatePage"
import DepartmentPage from "../pages/departamento/DepartmentPage"
import OccupationPage from "../pages/cargo/OccupationPage"

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
                    <Route path={ROUTE_OCCUPATION_URL} element={<OccupationPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default AppRouter
