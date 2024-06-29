import React from 'react';
import AppNavigation from './navigation/appNavigation';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import "./styles.css";

export default function App() {
  return (
      // // <AppNavigation />
      <HomeScreen />
  );
}
