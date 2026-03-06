import {StyleSheet, View, Text, Button} from "react-native";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {DrawerParamList} from "@/app/(tabs)";
import {useNavigation} from "@react-navigation/native";

type DashboardScreenNavigationProp = DrawerNavigationProp<DrawerParamList, "Dashboard">;

export default function DashboardScreen(  ) {
    const navigation = useNavigation<DashboardScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard Screen</Text>
            <Button title="Toogle drawer" onPress={() => navigation.toggleDrawer()}/>
            <Button title="Settings" onPress={() => navigation.jumpTo("Settings")}/>
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
