import React from 'react';
import { StyleSheet, View, Slider} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, List, Icon, ListItem, Content, Form, Item, Input, Label, Text, Body} from 'native-base';
//import { CheckBox } from 'react-native-elements';
import CheckBox from 'react-native-check-box';
import Tabs from './Tabs';

export default class EditMeal extends React.Component {

    chosenMeal = this.props.navigation.getParam('mealToView', {});

    

    static navigationOptions = {
        title: 'Edit Meal',
        headerLeft: null,
      };

    // state = {
    //     name: "",
    //     cost: 0,
    //     convenience: 0,
    //     breakfast: true,
    //     lunch: false,
    //     dinner: false
    // }

    costDescriptions = ["Cheap", "Moderate", "Expensive"];
    convenienceDescriptions=["Quick & Easy", "Moderate", "Complex"];

//    addMeal() {
//         let newMeal = {
//             "name": this.state.name,
//             "convenience": this.state.convenience,
//             "cost": this.state.cost,
//             "breakfast": this.state.breakfast,
//             "lunch": this.state.lunch,
//             "dinner": this.state.dinner
//         }

//         this.props.navigation.navigate('Meals', {newMeal: newMeal});
//    }
      
  render() {
    //this.chosenMeal = this.props.navigation.getParam('mealToEdit', {});
    console.log("On the EditMeal page, and the chosen meal for editing is:....");
    console.log(this.chosenMeal);

    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                    
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input value={this.chosenMeal.name} />
                    </Item>

                    {/* Cost Slider */}
                    <Item>
                        <View style={{flex: 1, marginBottom: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                                <Text>I want a meal that is:</Text>
                                <Text style={styles.mealDescriptor}>{this.costDescriptions[this.chosenMeal.cost]}</Text>
                            </View>
                        <Slider
                        value={this.chosenMeal.cost}
                        onValueChange={(costValue) => {
                            this.chosenMeal.cost = costValue;
                            this.forceUpdate();
                        }}
                        maximumValue={2}
                        step={1}
                        />
                        </View>
                    </Item>
                
        
                {/* Convenience Slider */}
                <Item>
                        <View style={{flex: 1, marginBottom: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                                <Text>I want a meal that is:</Text>
                                <Text style={styles.mealDescriptor}>{this.convenienceDescriptions[this.chosenMeal.convenience]}</Text>
                            </View>
                        <Slider
                        value={this.chosenMeal.convenience}
                        onValueChange={(convenienceValue) => {this.chosenMeal.convenience = convenienceValue; this.forceUpdate();}}                        maximumValue={2}
                        step={1}
                        />
                        </View>
                </Item>

                {/* Meal time checkboxes */}
                <Item last>
                    <View style={styles.checkList}>
                        <Text></Text>
                        <Text style={styles.mealDescriptor}>I would eat this for:</Text>
                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                onClick={()=>{
                                    if (this.chosenMeal.breakfast) {
                                        this.chosenMeal.breakfast = false;
                                    } else {
                                        this.chosenMeal.breakfast = true;
                                    }
                                    this.forceUpdate();
                                }}
                                isChecked={this.chosenMeal.breakfast}
                                leftText={"Breakfast"}
                            />

                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                onClick={()=>{
                                    if (this.chosenMeal.lunch) {
                                        this.chosenMeal.lunch = false;
                                    } else {
                                        this.chosenMeal.lunch = true;
                                    }
                                    this.forceUpdate();
                                }}
                                isChecked={this.chosenMeal.lunch}
                                leftText={"Lunch"}
                            />

                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                onClick={()=>{
                                    if (this.chosenMeal.dinner) {
                                        this.chosenMeal.dinner = false;
                                    } else {
                                        this.chosenMeal.dinner = true;
                                    }
                                    this.forceUpdate();
                                }}
                                isChecked={this.chosenMeal.dinner}
                                leftText={"Dinner"}
                            />
                            
                        
                    </View>
                </Item>

                {/* Choose Meal Button */}
                
                <View style={{marginTop: 40, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Button style={{backgroundColor: '#4cd964', alignItems: 'center'}}
                            onPress={() => {this.props.navigation.navigate('Meals');}} >
                        <Text style={{margin: 5}}>Save Changes</Text>
                    </Button>
                </View>    
                
                </Form>

                </View>
            </Content>

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