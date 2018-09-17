import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Meals from './Meals';
import Settings from './Settings';
import Tabs from './Tabs';

const AppNavigator = createStackNavigator({

  Home: { screen: Home },
  Meals: { screen: Meals},
  Settings: { screen: Settings},
  Tabs: {screen: Tabs}
  
});

export default AppNavigator;