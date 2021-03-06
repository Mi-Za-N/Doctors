import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../../containers/CustomDrawerContent';
import BottomTabRouter from '../../routers/BottomTabRouter/index';
import DetailsScreen from '../../screens/DetailsScreen/index';

const Drawer = createDrawerNavigator();

export default function DrawerRouter() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={styles.drawerStyle}
      overlayColor="#00000010"
    >
      <Drawer.Screen name="Home" component={BottomTabRouter} />
      <Drawer.Screen name="Notifications" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: 'transparent',
  },
});
