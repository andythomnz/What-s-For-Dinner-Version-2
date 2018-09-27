import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon, List, ListItem, Content} from 'native-base';
import Tabs from './Tabs';

export default class Meals extends React.Component {

    meals = this.props.navigation.getParam('meals', []);

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Meals",
        headerLeft: null,
        headerRight: <Text style={{fontWeight: 'bold', fontSize: 18}} onPress={()=>{ navigation.navigate('NewMeal'); }}> +   </Text>,
      });

  
      
  render() {
    if (this.props.navigation.getParam('meals', []) !== []) {
        console.log("MEALS GOT PASSED A NEW SET OF MEALS!:");
        console.log(this.props.navigation.getParam('meals', []));
        this.meals = this.props.navigation.getParam('meals', []);
    }

    console.log("Rendering the Meals page with: ");
    console.log(this.meals);


    newMeal = this.props.navigation.getParam('newMeal', 'none');
    console.log("New Meal is: ");
    console.log(newMeal);
    if (newMeal != 'none') {
        console.log("adding new meal provided from NewMeal page to Meals page!");
       this.meals.push(newMeal);
    }

    let mealsToShow = [];

    for (let a=0; a < this.meals.length; a++) {
        if (this.meals[a].visible === true) {
            mealsToShow.push(this.meals[a]);
        }
    }
    
    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View>
                    <List
                    dataArray={mealsToShow}
                    renderRow={(meal) =>
                    <ListItem
                    onPress={() => {this.props.navigation.navigate('ViewMeal', {mealToView: meal, meals: this.meals})}}>
                        <Text>{meal.name}</Text>
                    </ListItem>
                    }>
                    </List>
                </View>
            </Content>

      </View>


      <View>
        <Tabs navigation={this.props.navigation} meals={this.meals}> </Tabs>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  },
});