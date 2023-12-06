import { PropsWithChildren, createContext, useState } from "react";

type AuthType = {
    isAuthenticated: boolean
}

type AuthContextType = {
    auth: AuthType,
    changeAuth: (newValue: AuthType) => void
}

export const AuthContext = createContext<AuthContextType>({ auth: { isAuthenticated: false }, changeAuth: () => {} })

export function AuthProvider ({ children }: PropsWithChildren) {
    const [auth, setAuth] = useState({
        isAuthenticated: false
    })

    const changeAuth = (newValue: AuthType) => {
        setAuth(newValue)
    }

    return (
        <AuthContext.Provider value={{ auth, changeAuth }}>
            { children }
        </AuthContext.Provider>
    )
}