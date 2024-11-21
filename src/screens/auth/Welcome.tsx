import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from "react-native"

import { useNavigation } from "@react-navigation/native"
import GlobalStyles from "../../styles/GlobalStyles"

export default function Welcome() {
    const { navigate } = useNavigation()

    function goToSignIn() {
        navigate('SignIn')
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.logoContainer}>
                <Text style={styles.skedText}>
                    Sked
                </Text>
                <Text style={styles.skedSubtitle}>
                    Manage and report your classes
                </Text>
            </View>
            <View style={styles.signContainer}>
                <TouchableOpacity style={styles.googleButton} onPress={undefined}>
                    <Text style={styles.googleText}>
                        Continue With Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} onPress={goToSignIn}>
                    <Text style={styles.signInText}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <View style={styles.signUpBottom}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigate("SignUp")}>
                        <Text style={styles.linkText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.blue,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skedText: {
        color: 'white',
        fontSize: 38,
        fontWeight: '600'
    },
    skedSubtitle: {
        color: 'white',
        fontSize: 15,
    },
    signContainer: {
        backgroundColor: '#012a5a',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: 'white',
        height: 45,
        width: '90%',
        borderRadius: 30,
        marginTop: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleText: {
        color: 'black',
        fontSize: 18
    },
    signUpButton: {
        backgroundColor: '#486990',
        height: 45,
        width: '90%',
        borderRadius: 30,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: 'white',
        fontSize: 18
    },
    signInButton: {
        borderWidth: 1,
        borderColor: 'white',
        height: 45,
        width: '90%',
        borderRadius: 30,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        color: 'white',
        fontSize: 18
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
    },
    linkText: {
        margin: 0,
        color: 'white',
        fontSize: 14,
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    signUpBottom: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})