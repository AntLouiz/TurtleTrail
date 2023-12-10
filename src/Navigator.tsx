import React, { type ReactNode } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "./pages/Home";
import { TurtlesList } from "./pages/TurtlesList";
import { SearchInput } from "./components/SearchInput";

const Drawer = createDrawerNavigator();

const Navigator = (): ReactNode => {
  const defaultOptions = {
    headerRight: () => <SearchInput placeholder="Search a nest" />,
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={defaultOptions}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Turtles" component={TurtlesList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
