import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import analytics from "@react-native-firebase/analytics";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent("basket", {
            item: "mens grey t-shirt",
          })
        }
      />
    </View>
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
