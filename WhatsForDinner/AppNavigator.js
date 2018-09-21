import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Meals from './Meals';
import Settings from './Settings';
import Tabs from './Tabs';
import NewMeal from './NewMeal';

const AppNavigator = createStackNavigator({

  Home: { screen: Home },
  Meals: { screen: Meals},
  Settings: { screen: Settings},
  Tabs: {screen: Tabs},
  NewMeal: {screen: NewMeal}
  
});

export default AppNavigator;