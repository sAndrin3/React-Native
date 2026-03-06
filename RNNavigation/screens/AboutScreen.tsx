import {StyleSheet, View, Text, Button} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
// import {RootStackParamList} from "@/app/(tabs)";
import {useLayoutEffect} from "react";
import {RootStackParamList} from "@/app/(tabs)/index_stack";

type Props = NativeStackScreenProps<RootStackParamList, "About">;

export default function AboutScreen({route, navigation}:Props) {
    const name = route.params?.name ?? "Guest";

    useLayoutEffect(() => {
        navigation.setOptions({title: name})
    }, [name, navigation])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            <Button title="Update the name" onPress={() => navigation.setParams({name: "Visma"})}/>
            <Button title="Go back with data" onPress={() => navigation.navigate("Home", {result: "Data from about page"})}/>
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