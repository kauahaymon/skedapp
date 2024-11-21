import { useRoute } from "@react-navigation/native";
import { format } from "date-fns/format";
import moment from "moment";
import { View, Text, StyleSheet, Platform } from "react-native";


export default function ActivityInfo() {
    const { params }: any = useRoute()

    return (
        <View style={styles.container}>
            <Text>{params.theme}</Text>
            <Text>{params.room}</Text>
            <Text>{format(params.date, 'dd MMM yyyy')}</Text>
            <Text>{moment(params.time).format('HH:mm')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 20,
        backgroundColor: '#f8f8f8'
    }
})