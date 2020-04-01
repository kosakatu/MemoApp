import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.cricleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.cricleButtonTitle, { color: textColor }]}>
          { this.props.children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cricleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cricleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',

  },
});

export default CircleButton;
