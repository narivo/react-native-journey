import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "@react-native-community/blur";

const Tab = createBottomTabNavigator();

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTransparent: true,
          tabBarBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: "#18181b",
              }}
            >
              <BlurView
                style={{
                  flexGrow: 1,
                }}
              />
            </View>
          ),
        }}
      >
        <Tab.Screen name="Screen1" component={Screen1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
