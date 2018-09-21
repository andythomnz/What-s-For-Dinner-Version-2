import React from 'react';
import { StyleSheet, View, Slider} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, List, Icon, ListItem, Content, Form, Item, Input, Label, Text, Body} from 'native-base';
//import { CheckBox } from 'react-native-elements';
import CheckBox from 'react-native-check-box';
import Tabs from './Tabs';

export default class Meals extends React.Component {

    static navigationOptions = {
        title: 'New Meal',
      };

    state = {
        name: "",
        cost: 0,
        convenience: 0,
        breakfast: true,
        lunch: false,
        dinner: false
    }

    costDescriptions = ["Cheap", "Moderate", "Expensive"];
    convenienceDescriptions=["Quick & Easy", "Moderate", "Complex"];

   toggleBreakfast() {
        // if (this.state.breakfast===true) {
        //     this.setState({"name": this.state.name, 
        //     "cost": this.state.name, 
        //     "convenience": this.state.convenience,
        //     "breakfast": false,
        //     "lunch": this.state.lunch,
        //     "dinner": this.state.dinner});
        // }else {
        //     this.setState({"name": this.state.name, 
        //     "cost": this.state.name, 
        //     "convenience": this.state.convenience,
        //     "breakfast": true,
        //     "lunch": this.state.lunch,
        //     "dinner": this.state.dinner});
        // }
   }
      
  render() {
    console.log("Breakfast is " + this.state.breakfast);
    console.log("Lunch is " + this.state.lunch);
    console.log("Dinner is " + this.state.dinner);
    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                    
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input value={this.state.name} onChangeText={(text) => this.setState({name: text})}/>
                    </Item>

                    {/* Cost Slider */}
                    <Item>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                                <Text>I want a meal that is:</Text>
                                <Text style={styles.mealDescriptor}>{this.costDescriptions[this.state.cost]}</Text>
                            </View>
                        <Slider
                        value={this.state.cost}
                        onValueChange={(costValue) => this.setState({cost: costValue})}
                        maximumValue={2}
                        step={1}
                        />
                        </View>
                    </Item>
                
        
                {/* Convenience Slider */}
                <Item>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                                <Text>I want a meal that is:</Text>
                                <Text style={styles.mealDescriptor}>{this.convenienceDescriptions[this.state.convenience]}</Text>
                            </View>
                        <Slider
                        value={this.state.convenience}
                        onValueChange={(convenienceValue) => this.setState({convenience: convenienceValue})}
                        maximumValue={2}
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
                                this.setState({
                                    breakfast:!this.state.breakfast
                                })
                                }}
                                isChecked={this.state.breakfast}
                                leftText={"Breakfast"}
                            />

                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                onClick={()=>{
                                this.setState({
                                    lunch:!this.state.lunch
                                })
                                }}
                                isChecked={this.state.lunch}
                                leftText={"Lunch"}
                            />

                            <CheckBox
                                style={{flex: 1, padding: 10}}
                                onClick={()=>{
                                this.setState({
                                    dinner:!this.state.dinner
                                })
                                }}
                                isChecked={this.state.dinner}
                                leftText={"Dinner"}
                            />
                            
                        
                    </View>
                </Item>
                
                </Form>

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