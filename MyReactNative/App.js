import React, { useState } from "react";
import {
  Button,
  Image,
  Platform,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

export default function App() {
  const [isHungry, setIsHungry] = useState(true);
  const [name, setName] = useState("Paty");
  return (
    <>
      <ScrollView>
        <Text>I'm Baky and I'm {isHungry ? "hungry" : "full"}</Text>
        <View>
          <Text>My name is: "{name}"</Text>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            style={{ width: 200, height: 200 }}
          />
          <Button
            onPress={() => {
              setIsHungry(!isHungry);
            }}
            title={isHungry ? "Feed me!" : "Time pass by!"}
          />
        </View>
        <TextInput
          onChangeText={(newText) => {
            setName(newText);
          }}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="Give me name here!"
        />
      </ScrollView>
      <SectionList
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie",
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 22 : 11,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
