import React from 'react';
import { StyleSheet, View } from 'react-native';
/*import BodyText from './src/elements/BodyText';*/
import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';
import CricleButton from './src/elements/CricleButton.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CricleButton>+</CricleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
  },


});
