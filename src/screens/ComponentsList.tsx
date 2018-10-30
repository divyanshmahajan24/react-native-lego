import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import Ripple from '../components/ripple';

class ComponentsList extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Ripple
          style={styles.listItem}
          // onPress={() => this.props.navigation.navigate('Details')}
        >
          <Text>Buttons</Text>
        </Ripple>
        <Ripple style={styles.listItem}>
          <Text>Ripple</Text>
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 1,
  } as ViewStyle,
});

export default ComponentsList;
