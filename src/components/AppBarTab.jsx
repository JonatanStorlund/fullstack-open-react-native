import {StyleSheet, Pressable} from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    color: theme.appBar.color
  }
});

const AppBarTab = ({label}) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{label}</Text>
    </Pressable>
  )
};

export default AppBarTab
