import React from 'react';
import {View, StyleSheet} from 'react-native';

export default (Indicator = ({
  itemCount,
  currentIndex,
  indicatorStyle,
  indicatorContainerStyle,
  indicatorActiveColor,
  indicatorInActiveColor, 
  indicatorActiveWidth = 6,
}) => {
  return (
    <View style={[styles.container, indicatorContainerStyle]}>
      {renderIndicator(
        itemCount,
        currentIndex,
        indicatorStyle,
        indicatorActiveColor,
        indicatorInActiveColor,
        indicatorActiveWidth,
      )}
    </View>
  );
});

export const renderIndicator = (
  count,
  currentIndex,
  indicatorStyle,
  indicatorActiveColor,
  indicatorInActiveColor,
  indicatorActiveWidth,
) => {
  let indicators = [];
  for (let i = 0; i < count; i++) {
    indicators.push(
      <View
        style={[
          styles.indicator,
          indicatorStyle,
          i === currentIndex
            ? indicatorActiveColor
              ? {
                  ...styles.active,
                  ...{
                    backgroundColor: indicatorActiveColor,
                    width: 10,

                  },
                }
              : styles.active
            : {
                ...styles.inactive,
                ...{backgroundColor: indicatorInActiveColor},
              },
        ]}
      />,
    );
  }
  return indicators;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
    marginBottom:10
  },
  active: {},
  inactive: {},
});