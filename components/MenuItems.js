import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { menuItemsToDisplay } from ".././util/menuItemsToDisplay";

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={menuStyles.container}>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      ></FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  headerText: {
    color: "#EDEFEE",
    fontSize: 40,
    paddingVertical: 8,
    flexWrap: "wrap",
    textAlign: "center",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
  },
});

/*Set flatList props*/
const Seperator = () => <View style={menuStyles.seperator} />;
const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;
const Footer = () => (
  <Text style={menuStyles.footerText}>All rights reserved!</Text>
);

export default MenuItems;
