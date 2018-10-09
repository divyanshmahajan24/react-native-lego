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
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              appearance="primary"
            >
              Primary
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              appearance="secondary"
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              appearance="alert"
            >
              Alert
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              appearance="success"
            >
              Success
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              appearance="warning"
            >
              Warning
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              mode="transparent"
              appearance="primary"
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
              style={styles.button}
              mode="outlined"
              appearance="primary"
            >
              Primary
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="outlined"
              appearance="secondary"
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="outlined"
              appearance="alert"
            >
              Alert
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="outlined"
              appearance="success"
            >
              Success
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="outlined"
              appearance="warning"
            >
              Warning
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="outlined"
              appearance="warning"
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
              style={styles.button}
              mode="contained"
              appearance="primary"
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="contained"
              appearance="secondary"
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="contained"
              appearance="alert"
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="contained"
              appearance="success"
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="contained"
              appearance="warning"
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="contained"
              appearance="warning"
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
              appearance="primary"
              loading
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="transparent"
              appearance="secondary"
              loading
            >
              Default
            </Button>
            <Button
              onPress={() => console.log('Pressed')}
              style={styles.button}
              mode="outlined"
              appearance="alert"
              loading
            >
              Default
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
