import { Link } from "react-router-dom"
import NavAuth from '../../components/NavAuth';
import { ROUTE_LOGIN_URL } from "../../constants/routes/routes";
import FormInputAuth from "../../components/FormInputAuth";
import FormAuth from '../../components/FormAuth';
// import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {

    // const [auth, changeAuth] = useAuth()

    const submit = () => {
        // changeAuth({
        //     isAuthenticated: true
        // })
    }

    return (
        <section className="grid h-screen grid-cols-12">
            <main className="flex flex-col justify-start col-span-12 sm:justify-center sm:col-span-8 place-items-center">
                <NavAuth activeLink={ROUTE_LOGIN_URL} />
                <FormAuth submitAction={ submit }>
                    <FormInputAuth icon="../src/assets/icons/user.svg" type="text" name="username" text="Usuario:" placeholder="Usuario1" />
                    <FormInputAuth icon="../src/assets/icons/password.svg" type="password" name="password" text="Contraseña:" placeholder="********" />
                    <div className="flex items-center justify-between w-full gap-4">
                        <Link to="#" className="text-sm font-extrabold text-light-primary-200 hover:text-light-primary-400">¿Olvidaste t&uacute; contraseña?</Link>
                        <button className="px-5 py-1 font-bold text-white bg-primary-400 rounded-full shadow-md w-36 hover:bg-primary-200">Entrar</button>
                    </div>
                </FormAuth>
            </main>
            <aside className="hidden sm:block sm:col-span-4 relative">
                <div className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-[url('../src/assets/images/imageLogin.jpg')] bg-no-repeat bg-cover bg-center w-80 h-80 shadow-xl shadow-accent-400 rounded-xl"></div>
            </aside>
        </section>
    )
}

export default LoginPage
