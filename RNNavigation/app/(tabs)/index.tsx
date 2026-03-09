import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CourseListScreen from "@/screens/CourseListScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/Settings";
import {Ionicons} from "@expo/vector-icons";
import {AboutStack} from "@/app/(tabs)/index_stack";


export type DrawerParamList = {
    Dashboard: undefined;
    Settings: undefined;
};

const Tabs = createBottomTabNavigator();

export default function App(){
    return (
        <Tabs.Navigator screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: true,
            tabBarActiveTintColor: "purple"
        }}>
            <Tabs.Screen name="Course List" component={CourseListScreen}/>
            <Tabs.Screen name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({ color }) =>
                    <Ionicons name="person" size={20} color={color} />,
                    tabBarBadge: 3
            }}
            />
            <Tabs.Screen name="Settings" component={SettingsScreen}/>
            <Tabs.Screen name="About Stack" component={AboutStack} options={{
                headerShown: false
            }}/>
        </Tabs.Navigator>
    )
}