import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Meals from './Meals';

const AppNavigator = createStackNavigator({

  Home: { screen: Home },
  Meals: { screen: Meals},
  
});

export default AppNavigator;