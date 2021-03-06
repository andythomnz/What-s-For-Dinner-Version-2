import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Meals from './Meals';
//import Settings from './Settings';
import Tabs from './Tabs';
import NewMeal from './NewMeal';
import ViewMeal from './ViewMeal';
import ChosenMeal from './ChosenMeal';
import EditMeal from './EditMeal';

const AppNavigator = createStackNavigator({

  Home: { screen: Home },
  Meals: { screen: Meals},
  Tabs: {screen: Tabs},
  NewMeal: {screen: NewMeal},
  ViewMeal: { screen: ViewMeal },
  ChosenMeal: { screen: ChosenMeal },
  EditMeal: { screen: EditMeal }
  
});

export default AppNavigator;