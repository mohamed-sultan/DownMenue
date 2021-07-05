import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { RenderDrawerItem } from "../DrawerItem";

import { Data } from "../../Static/Data";

import { styles } from "./styles";

export default ({ onclose }) => {
  const {
    wrapper,
    closeBtn,
    closeBtnText,
    closeText,
    contentContainerStyle,
  } = styles;
  return (
    <ScrollView contentContainerStyle={contentContainerStyle} style={wrapper}>
      <TouchableOpacity style={closeBtn} onPress={onclose}>
        <Text style={closeText}>X</Text>
      </TouchableOpacity>
      {/* <Text style={closeBtnText}>DrawerContent</Text> */}

      {Object.keys(Data).map((item, i) => {
        return <RenderDrawerItem item={item} parent={Data} key={i} />;
      })}
    </ScrollView>
  );
};
