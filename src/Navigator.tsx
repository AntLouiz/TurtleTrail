import React, { type ReactNode } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "./pages/Home";
import { TurtlesList } from "./pages/TurtlesList";
import { SearchInput } from "./components/SearchInput";

const Drawer = createDrawerNavigator();

const Navigator = (): ReactNode => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Turtles">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => <SearchInput placeholder="Search a nest" />,
          }}
        />
        <Drawer.Screen
          name="Turtles"
          component={TurtlesList}
          options={{
            headerRight: () => <SearchInput placeholder="Search a turtle" />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
