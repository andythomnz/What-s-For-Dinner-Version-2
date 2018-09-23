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
    newMeal = this.props.navigation.getParam('newMeal', 'none');
    console.log("New Meal is: ");
    console.log(newMeal);
    if (newMeal != 'none') {
        console.log("adding new meal provided from NewMeal page to Meals page!");
       this.meals.push(newMeal);
    }

    let mealToDelete = this.props.navigation.getParam('mealToDelete', {});
    if (mealToDelete !== undefined) {
        console.log("found a meal to be deleted");
        let indexToDelete = this.meals.indexOf(mealToDelete);
        console.log("I should delete " + mealToDelete.name);
        if (indexToDelete > -1) {
            this.meals.splice(indexToDelete,1);
        }
    }
    
    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View>
                    <List
                    dataArray={this.meals}
                    renderRow={(meal) =>
                    <ListItem
                    onPress={() => {this.props.navigation.navigate('ViewMeal', {mealToView: meal})}}>
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