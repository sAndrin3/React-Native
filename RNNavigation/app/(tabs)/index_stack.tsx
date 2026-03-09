import {Pressable, Text} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AboutScreen from "@/screens/AboutScreen";
import HomeScreen from "@/screens/HomeScreen";

export type RootStackParamList = {
    Home: {result?: string};
    About?: { name?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AboutStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={
            {
                headerStyle: {
                    backgroundColor: "#6a51ae"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                headerRight: () => (
                    <Pressable onPress={() => alert("Menu button pressed!")}>
                        <Text style={{ color: "#fff", fontSize: 16}}>Menu</Text>
                    </Pressable>
                ),
                contentStyle:{
                    backgroundColor: "#e8e4f3"
                }
            }
        }>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Welcome Home",

                }}
            />
            <Stack.Screen
                name="About"
                component={AboutScreen}
                initialParams={{name: "Guest"}}
            />
        </Stack.Navigator>
    );
}

export default function Home() {
    return (
        <AboutStack/>
    )
}

