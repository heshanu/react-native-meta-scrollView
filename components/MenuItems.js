import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { menuItemsToDisplay } from '../utils/menuItemsToDisplay';

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);


const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36,
  },
});

export default MenuItems;