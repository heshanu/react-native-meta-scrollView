import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <MenuItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
