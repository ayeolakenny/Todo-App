import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface headerProps {}

export const Header: React.FC<headerProps> = ({}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
