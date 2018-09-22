import React from 'react';
import { StyleSheet, View, Slider} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, List, Icon, ListItem, Content, Form, Item, Input, Label, Text, Body} from 'native-base';
//import { CheckBox } from 'react-native-elements';
import CheckBox from 'react-native-check-box';
import Tabs from './Tabs';

export default class ViewMeal extends React.Component {

    chosenMeal = this.props.navigation.getParam('mealToView', {});

    

    static navigationOptions = {
        title: 'View Meal',
      };

    costDescriptions = ["Cheap", "Moderate", "Expensive"];
    convenienceDescriptions=["Quick & Easy", "Moderate", "Complex"];

   
      
  render() {
      console.log("View Meal pages's chosenMeal is: ");
      console.log(this.chosenMeal);

    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    
                
                    <Text style={styles.name}>{this.chosenMeal.name}</Text>
                

                    <Text>Cost: {this.costDescriptions[this.chosenMeal.cost]}</Text>

                    <Text>Convenience: {this.convenienceDescriptions[this.chosenMeal.convenience]}</Text>
                
        

                {/* Meal time checkboxes */}
                    <View style={styles.checkList}>
                        <Text></Text>
                        <Text style={styles.mealDescriptor}>I would eat this for:</Text>
                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                isChecked={this.chosenMeal.breakfast}
                                leftText={"Breakfast"}
                                onClick={()=>{}}
                            />

                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                isChecked={this.chosenMeal.lunch}
                                leftText={"Lunch"}
                                onClick={()=>{}}
                            />

                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                isChecked={this.chosenMeal.dinner}
                                leftText={"Dinner"}
                                onClick={()=>{}}
                            />
                            
                        
                    </View>
            

                </View>
            </Content>

      </View>


      <View>
        <Tabs navigation={this.props.navigation}> </Tabs>
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
    fontSize: 18,
    fontWeight: 'bold'
  },
  email: {
    color: 'red'
  },
  mealDescriptor: {
    fontWeight: 'bold',
  },
  checkList: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      marginTop: 5
  }
});