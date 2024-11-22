import { StatusBar } from "expo-status-bar"
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Platform,
    TouchableOpacity
} from "react-native"

import { useContext, useState } from "react";
import ActivityItem from "../components/ActivityItem"
import Button from "../components/button/ButtonAdd"
import FormModal from "./modal/Form";
import { ActivityContext } from "../context/ActivityProvider";
import { firebase_auth } from "../services/firebaseConfig";


export default function Home() {

    const DATA = [
        {
            id: Math.random(),
            theme: 'Grammar',
            room: '103',
            date: new Date(),
            time: new Date()
        },
        {
            id: Math.random(),
            theme: 'Past Simple',
            room: '105',
            date: new Date(),
            time: new Date()
        },

    ]

    const { activity, getDataList }: any = useContext(ActivityContext)
    const [formShown, setFormShown] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={() => firebase_auth.signOut()}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <View style={styles.listContainer}>
                <FlatList
                    data={activity}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item: any) => item.id.toString()}
                    renderItem={({ item }) => <ActivityItem {...item} id={item.id} />}
                />
            </View>
            <FormModal isVisible={formShown} onCancel={() => setFormShown(!formShown)}/>
            
            <Button onPress={() => setFormShown(!formShown)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 20,
        backgroundColor: '#f8f8f8'
    },
    listContainer: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
})