import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Meals from './Meals';
import Settings from './Settings';
import Tabs from './Tabs';
import NewMeal from './NewMeal';
import ViewMeal from './ViewMeal';

const AppNavigator = createStackNavigator({

  Home: { screen: Home },
  Meals: { screen: Meals},
  Settings: { screen: Settings},
  Tabs: {screen: Tabs},
  NewMeal: {screen: NewMeal},
  ViewMeal: { screen: ViewMeal }
  
});

export default AppNavigator;