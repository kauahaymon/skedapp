    import {
        StyleSheet,
        View,
        Text,
        TouchableOpacity,
        TextInput
    } from "react-native"
    import { InputArea } from "../../components/InputArea"
    import { useState } from "react"
    import { firebase_auth } from "../../services/firebaseConfig"
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

    export default function SignIn() {

        const [email, setEmail]: any = useState()
        const [password, setPassword]: any = useState()
        const auth = firebase_auth

        const handleSignIn = async () => {
            try {
                const response = await signInWithEmailAndPassword(auth, email, password)
                console.log(response)
            } catch (error) {
                console.log(error)
                alert('sign in failed: ' + error)
            }
        }

        const handleSignUp= async () => {
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password)
                console.log(response)
                alert('check your email')
            } catch (error) {
                console.log(error)
                alert('registration failed: ' + error)
            }
        }
        return (
            <View style={styles.container}>
                <Text style={styles.signInText} >Create an account</Text>
                <View style={styles.group} >
                    <TextInput style={styles.input}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder='E-mail'
                    />
                </View>
                <View style={styles.group} >
                    <TextInput style={styles.input}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                        placeholder='Password'
                    />
                </View>
                <TouchableOpacity style={styles.signUpButton} onPress={handleSignIn}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.signInText}>Register</Text>
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
        },
        input: {
            flex: 1,
            paddingLeft: 15,
        },
        group: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 45,
            marginTop: 15,
            width: '90%',
            borderRadius: 30,
            overflow: 'hidden'
        }
    })

