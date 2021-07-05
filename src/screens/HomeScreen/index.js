import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import LottieView from "lottie-react-native";

import { styles } from "./styles";

export default ({ onOpenDrawerPress }) => {
  const { wrapper, openDrawerButton, openDrawerText } = styles;
  return (
    <View style={wrapper}>
      <LottieView source={require("../../walk.json")} autoPlay loop />
      <TouchableOpacity onPress={onOpenDrawerPress} style={openDrawerButton}>
        <Text style={openDrawerText}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};
