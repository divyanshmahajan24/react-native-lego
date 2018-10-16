import { createStackNavigator } from 'react-navigation';

import screens from './screens';

const { ComponentsList, Buttons, Ripples } = screens;

const AppNavigator = createStackNavigator(
  {
    ComponentsList: {
      screen: ComponentsList,
    },
    Buttons: {
      screen: Buttons,
    },
    Ripples: {
      screen: Ripples,
    },
  },
  {
    initialRouteName: 'Ripples',
  },
);

export default AppNavigator;
