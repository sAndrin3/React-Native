import {StyleSheet, View, Text } from "react-native";

export default function CourseListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CourseList Screen</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "red",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    }
});