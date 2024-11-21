import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import GlobalStyles from "../../styles/GlobalStyles";

type Props = {
    onPress: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Button({ onPress }: Props) {
    return (
        <TouchableOpacity
            style={style.button}
            onPress={() => onPress((rev: boolean) => !rev)}
            activeOpacity={0.83}
        >
            <Feather name="plus" size={30} color={'white'} />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: GlobalStyles.colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    }
})