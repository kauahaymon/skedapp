    import { NavigationContainer } from "@react-navigation/native"
    import AuthRoutes from "./auth.routes"
    import HomeRoutes from "./home.routes"
    import { useEffect, useState } from "react";
    import { onAuthStateChanged, User } from "firebase/auth";
    import { firebase_auth } from "../../services/firebaseConfig";

    export default function Routes() {

        const userIsLoggedIn = false;

        const [user, setUser] = useState<any>()
        useEffect(() => {
            onAuthStateChanged(firebase_auth, (user) => {
                setUser(user)
            })
        }, [])

        return (
            <NavigationContainer>
                {user ? <HomeRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        )
    }