import React from 'react';
import { View, Text } from 'react-native';

import Ripple from '../components/ripple';

class Ripples extends React.Component {
  render() {
    return (
      <Ripple
        onPress={() => console.log('presses')}
        onPressIn={() => console.log('hello')}
        onPressOut={() => console.log('bye')}
        rippleColor="#d2d2d2"
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Press Me</Text>
        </View>
      </Ripple>
    );
  }
}
export default Ripples;
