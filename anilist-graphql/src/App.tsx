import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import Videos from "./screens/Videos";
import Profile from "./screens/Profile";
import Library from "./screens/Library";
import Downloads from "./screens/Downloads";
import ProfileBarButton from "./components/ProfileTabButton";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

type AppProps = {
  onLayoutRootView: () => Promise<void>;
};

export default function App(props: AppProps) {
  return (
    <NavigationContainer onReady={props.onLayoutRootView}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerTransparent: true,
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            switch (route.name) {
              case "Home":
                icon = require("../assets/icons/home.png");
                break;
              case "Videos":
                icon = require("../assets/icons/videos.png");
                break;
              case "Profile":
                icon = require("../assets/icons/profile_bg.png");
                break;
              case "Library":
                icon = require("../assets/icons/library.png");
                break;
              case "Downloads":
                icon = require("../assets/icons/downloads.png");
                break;
              default:
                break;
            }
            return <Image source={icon} fadeDuration={0} />;
          },
          tabBarStyle: { height: 75 },
          tabBarBackground: () => <View className="grow bg-deep-dark" />,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Videos" component={Videos} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <LinearGradient
                  className="w-16 h-16 rounded-full"
                  colors={["#19A1BE", "#7D4192"]}
                >
                  <Image
                    className="w-[60] h-[60] top-[2] left-[2] rounded-full"
                    source={require("../assets/images/movie1.png")}
                    resizeMode="contain"
                  />
                </LinearGradient>
              );
            },
            tabBarButton: (props) => {
              return <ProfileBarButton {...props} />;
            },
          }}
        />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Downloads" component={Downloads} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
