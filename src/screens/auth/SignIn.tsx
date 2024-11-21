import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native"
import { InputArea } from "../../components/InputArea"

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.signInText} >Enter your account</Text>
            <InputArea placeholder="E-mail" />
            <InputArea placeholder="Password" />
            <TouchableOpacity style={styles.signUpButton} >
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#012a5a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButton: {
        backgroundColor: '#486990',
        height: 45,
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        color: '#fff',
        fontSize: 18,
    }
})

