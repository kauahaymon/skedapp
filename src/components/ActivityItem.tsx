import React, { useContext, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    Alert
} from "react-native";

import moment from 'moment'
import { format } from 'date-fns';
import { FontAwesome } from "@expo/vector-icons";
import Swipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Feather } from "@expo/vector-icons";
import GlobalStyles from "../styles/GlobalStyles";
import { ActivityContext } from "../context/ActivityProvider";
import { useNavigation } from "@react-navigation/native";

type Props = {
    id: any
    theme: string
    room: any
    date: Date
    time: Date
}

export default function ActivityItem(props: Props) {

    const { deleteActivity }: any = useContext(ActivityContext)
    const [checked, setChecked] = useState(false)
    const formattedDate = moment(props.date).format('DD MMM')
    const formattedTime = `${format(props.time, 'HH')}h`
    const { navigate } = useNavigation()

    const doneStyle: any = checked ? {
        textDecorationLine: 'line-through',
        color: GlobalStyles.colors.blue
    } : {}

    const handleDeleteActivity = () => {
        Alert.alert('Delete class?', '', [
            {
                text: 'Cancel',
            },
            {
                text: 'Ok', onPress() { deleteActivity(props.id) }
            }
        ])
    }

    const getRightContent = () => (
        <TouchableOpacity style={styles.rightContent} onPress={handleDeleteActivity}>
            <Feather name="trash" color={'white'} size={22} />
        </TouchableOpacity>
    )

    const getLeftContent = () => (
        <TouchableOpacity style={styles.LeftContent}>
            <Feather name="arrow-right" color={'white'} size={22} />
        </TouchableOpacity>
    )

    function goToActivityInfo() {
        navigate('ActivityInfo', {...props})
    }

    return (
        <Swipeable renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            friction={1}
            containerStyle={{ borderRadius: 10 }}
            dragOffsetFromRightEdge={15}
            overshootRight={false}
        >
            <View style={styles.container}>
                <View style={styles.checkBoxContainer}>
                    <View style={styles.checkboxBase}>
                        <Pressable
                            role="checkbox"
                            aria-checked={checked}
                            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                            onPress={() => setChecked(!checked)}>
                            {checked && <FontAwesome name="check" size={16} color="white" />}
                        </Pressable>
                    </View>
                </View>
                <Pressable onPress={goToActivityInfo}>
                    <View style={styles.itemContainer}>
                        <Text style={[styles.title, doneStyle]}>
                            {props.theme}
                        </Text>
                        <View style={styles.infos}>
                            <Text style={styles.subtitle}>
                                {props.room}  {formattedTime}
                            </Text>
                            <Text style={styles.subtitle}>
                                {formattedDate}
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#FFFFFFFF',
        marginBottom: 7,
        borderRadius: 10,
    },
    itemContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 75,
    },
    infos: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        color: '#2b2b2b'
    },
    subtitle: {
        fontSize: 12,
        color: '#7c808f'
    },
    checkBoxContainer: {
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    checkboxChecked: {
        backgroundColor: GlobalStyles.colors.blue,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    checkboxBase: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 21,
        height: 21,
        borderRadius: 10.5,
        borderWidth: 1,
        borderColor: '#7c808f'
    },
    rightContent: {
        height: 60,
        width: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 14,
        borderTopRightRadius: 14
    },
    LeftContent: {
        height: 60,
        width: '100%',
        backgroundColor: GlobalStyles.colors.blue,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
        borderRadius: 14,
    }
})
