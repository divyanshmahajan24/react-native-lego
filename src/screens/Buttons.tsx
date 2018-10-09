import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Button from '../components/button';

class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text>Text Buttons</Text>
          <View style={styles.row}>
            <Button onPress={() => console.log('Pressed')} mode="transparent">
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              textColor="#0070dd"
            >
              Custom
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              textColor="#d93737"
              iconLeft="add-circle-outline"
            >
              Icon Left
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              textColor="#2DA953"
              iconRight="add-circle-outline"
            >
              Icon Right
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              disabled
            >
              Disabled
            </Button>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text>Outlined Buttons</Text>
          <View style={styles.row}>
            <Button
              onPress={() => console.log('Pressed')}
              mode="outlined"
              style={styles.button}
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="outlined"
              style={styles.button}
              textColor="#0070dd"
            >
              Custom
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="outlined"
              style={styles.button}
              textColor="#d93737"
              iconLeft="add-circle-outline"
            >
              Icon Left
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="outlined"
              style={styles.button}
              textColor="#2DA953"
              iconRight="add-circle-outline"
            >
              Icon Right
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="outlined"
              style={styles.button}
              disabled
            >
              Disabled
            </Button>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text>Contained Buttons</Text>
          <View style={styles.row}>
            <Button
              onPress={() => console.log('Pressed')}
              mode="contained"
              style={styles.button}
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="contained"
              style={styles.button}
              backgroundColor="#d93737"
            >
              Custom
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="contained"
              style={styles.button}
              iconLeft="add-circle-outline"
              backgroundColor="#2da953"
            >
              Icon Left
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="contained"
              style={styles.button}
              iconRight="add-circle-outline"
              backgroundColor="#FEAF0D"
            >
              Icon Right
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="outlined"
              style={styles.button}
              disabled
            >
              Disabled
            </Button>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text>Loading Buttons</Text>
          <View style={styles.row}>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="contained"
              loading
            >
              Contained
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="transparent"
              textColor="#2da953"
              loading
            >
              Transparent
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="outlined"
              textColor="#d93737"
              loading
            >
              Outlined
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  button: {
    marginRight: 8,
    marginBottom: 8,
  },
});

export default Buttons;
