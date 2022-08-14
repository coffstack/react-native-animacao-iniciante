import React, { useState } from "react";
import { Button, Dimensions, StyleSheet, View, Text } from "react-native";

import Reanimated, {
  SlideInRight,
  SlideInUp,
  SlideOutLeft,
} from "react-native-reanimated";

import { languageData } from "./data";

const SCREEN_WIDTH = Dimensions.get("window").width;

const duration = 500;

export function LanguageList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextItem() {
    if (currentIndex < languageData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function renderItem(index) {
    const item = languageData[index];
    return (
      <View style={styles.item}>
        <Reanimated.View
          key={`content-${index}`}
          entering={SlideInRight.duration(duration)}
          exiting={SlideOutLeft.duration(duration)}
          style={styles.itemContent}
        >
          <Reanimated.Image
            key={`image-${index}`}
            entering={SlideInUp.delay(duration / 2)
              .duration(duration)
              .springify()}
            source={item.image}
            style={[styles.image]}
          />
          <Text style={styles.itemText}>{item.name}</Text>
        </Reanimated.View>
      </View>
    );
  }

  return (
    <View>
      {renderItem(currentIndex)}
      <View style={styles.button}>
        <Button title="Próximo Item" onPress={nextItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  itemContent: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    padding: 16,
    borderRadius: 16,
  },
  itemText: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    marginTop: 24,
  },
});
