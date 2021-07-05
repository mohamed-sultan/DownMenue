import React, { useState, useEffect, useRef } from "react";
import { Text, Animated, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
const {
  expandableText,
  SibilingsWrapper,
  ParentWrapper,
  sibilingText,
  text,
  textBold,
} = styles;
export const RenderDrawerItem = ({ item, parent, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const animatedRef = useRef(new Animated.Value(-100)).current;
  const itemObj = parent[item];
  useEffect(() => {
    Animated.spring(animatedRef, {
      toValue: 0,
      speeds: 2000,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }, [expanded]);

  const transform = [
    {
      translateX: animatedRef.interpolate({
        inputRange: [-100, 0],
        outputRange: [-100 * index, 0],
        extrapolate: "clamp",
      }),
    },
  ];

  return (
    <Animated.View style={{ transform }}>
      {/* //last child with no sibilings */}
      {typeof parent[item] == "string" && (
        <TouchableOpacity style={SibilingsWrapper}>
          <Text style={sibilingText}>{item}</Text>
        </TouchableOpacity>
      )}
      {/* // parent */}
      {typeof parent[item] === "object" && (
        <Animated.View style={ParentWrapper}>
          <TouchableOpacity
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View style={expandableText}>
              <Text style={text}> {item}</Text>
              <Text style={textBold}>{expanded ? "-" : "+"}</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 8,
            }}
          >
            {expanded &&
              Object.keys(itemObj).map((e, i) => {
                return (
                  <RenderDrawerItem
                    item={e}
                    parent={itemObj}
                    index={i}
                    key={i}
                  />
                );
              })}
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
};
