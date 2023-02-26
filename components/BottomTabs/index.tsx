import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Upload, Shorts } from "../../views";
import * as WebBrowser from "expo-web-browser";

const Tab = createBottomTabNavigator();

const openWebBrowser = async (url: string) => {
  await WebBrowser.openBrowserAsync(url);
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#141414",
          borderTopColor: "#303030",
          height: 90,
          borderWidth: 0.5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="home"
              size={focused ? 26 : 24}
              color={focused ? "#2ECC86" : "#929292"}
              filled={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shorts"
        component={Shorts}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="play-circle"
              size={focused ? 28 : 24}
              color={focused ? "#2ECC86" : "#929292"}
              filled={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="plus-circle"
              size={focused ? 30 : 28}
              color={focused ? "#2ECC86" : "#929292"}
              filled={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Docs"
        component={() => null}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            openWebBrowser("https://livepeerjs.org/react/getting-started");
          },
        })}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="file-text"
              size={focused ? 26 : 24}
              color={focused ? "#2ECC86" : "#929292"}
              filled={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
