import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatListComponent from "./components/FlatListComponent";
import ArrayListComponent from "./components/ArrayListComponent";
import FetchListComponent from "./components/FetchListComponent";

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatListComponent/>
        <ArrayListComponent/>
        <FetchListComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
