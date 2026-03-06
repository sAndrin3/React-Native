import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import CourseListScreen from "@/screens/CourseListScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/Settings";

export type DrawerParamList = {
    Dashboard: undefined;
    Settings: undefined;
};

const Tabs = createBottomTabNavigator();

export default function App(){
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Course List" component={CourseListScreen}/>
            <Tabs.Screen name="Profile" component={ProfileScreen}/>
            <Tabs.Screen name="Settings" component={SettingsScreen}/>
        </Tabs.Navigator>
    )
}