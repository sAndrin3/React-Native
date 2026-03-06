import 'react-native-gesture-handler'
import {createDrawerNavigator} from "@react-navigation/drawer";
import DashboardScreen from "@/screens/DashboardScreen";
import SettingsScreen from "@/screens/Settings";

export type DrawerParamList = {
    Dashboard: undefined;
    Settings: undefined;
};

const Drawer = createDrawerNavigator();

export default function App(){
    return (
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        title: "My Dashboard",
                        drawerLabel: "Dashboard label",
                        drawerActiveTintColor: "#333",
                        drawerActiveBackgroundColor: "lightblue",
                        drawerContentStyle: {
                            backgroundColor: "#c6cbef",
                        }
                    }}
                />
                <Drawer.Screen name="Settings" component={SettingsScreen}/>
            </Drawer.Navigator>
    )
}