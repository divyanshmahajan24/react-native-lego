import { createStackNavigator } from 'react-navigation';

import screens from './screens';

const { ComponentsList, Buttons } = screens;

const AppNavigator = createStackNavigator(
  {
    ComponentsList: {
      screen: ComponentsList,
    },
    Buttons: {
      screen: Buttons,
    },
  },
  {
    initialRouteName: 'Buttons',
  },
);

export default AppNavigator;
