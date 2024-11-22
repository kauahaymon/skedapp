import { createContext } from "react"

export const AuthContext = createContext({})

export default function AuthProvider({ children }: any) {
    return (
        <AuthContext.Provider value={'dois'}>
            {children}
        </AuthContext.Provider>
    )
}