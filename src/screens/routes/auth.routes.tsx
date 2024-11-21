import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../auth/Welcome'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'

const Stack = createNativeStackNavigator()

export default function AuthRoutes() {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    )
}