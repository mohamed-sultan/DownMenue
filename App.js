import React from "react";
import { View, Dimensions } from "react-native";

import Drawer from "react-native-drawer";
import DrawerContent from "./src/Copmponents/Drawer";

import HomeScreen from "./src/screens/HomeScreen";

const Application = () => {
  const [open, setOpen] = React.useState(false);
  const _drawer = React.useRef(null);
  return (
    <Drawer
      type="overlay"
      openDrawerOffset={Dimensions.get("screen").width / 6}
      open={open}
      ref={_drawer}
      content={<DrawerContent onclose={() => _drawer.current.close()} />}
      tapToClose
      side="top"
    >
      <View style={{ flex: 1 }}>
        <HomeScreen onOpenDrawerPress={() => _drawer.current.open()} />
      </View>
    </Drawer>
  );
};

export default Application;
