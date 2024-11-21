import { NavigationContainer } from "@react-navigation/native"
import AuthRoutes from "./auth.routes"
import HomeRoutes from "./home.routes"

export default function Routes() {

    const userIsLoggedIn = true;

    return (
        <NavigationContainer>
            {userIsLoggedIn ? <HomeRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}