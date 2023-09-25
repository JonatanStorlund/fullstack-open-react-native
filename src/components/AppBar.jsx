import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 120,
    width: "100%",
    backgroundColor: theme.appBar.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 20
  },
  tab: {
    color: theme.appBar.color
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab label="Tab 1" />
      <AppBarTab label="Tab 2" />
    </View>
  )
};

export default AppBar;
