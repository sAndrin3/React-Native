import {Button, StyleSheet, View, Text} from "react-native";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "@/app/(tabs)/index_stack";
// import {RootStackParamList} from "@/app/(tabs)";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({navigation, route}: Props) {
    // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{route.params?.result}</Text>
            <Button title="Go to About" onPress={() => navigation.navigate("About", {
                name: "Jumbo"
            })}/>
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