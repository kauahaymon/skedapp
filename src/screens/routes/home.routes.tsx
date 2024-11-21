import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import ActivityProvider from "../../context/ActivityProvider"
import Home from "../Home"
import ActivityInfo from "../ActivityInfo"

const Stack = createNativeStackNavigator()

export default function HomeRoutes() {
    return (
        <GestureHandlerRootView>
            <ActivityProvider>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen options={{ headerShown: true, title: ''}} name="ActivityInfo" component={ActivityInfo} />
                </Stack.Navigator>
            </ActivityProvider>
        </GestureHandlerRootView>
    )
}
