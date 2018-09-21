import React from 'react';
import { StyleSheet, View, Slider} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, List, Icon, ListItem, Content, Form, Item, Input, Label, Text, Body} from 'native-base';
import { CheckBox } from 'react-native-elements';
import Tabs from './Tabs';

export default class Meals extends React.Component {

    static navigationOptions = {
        title: 'New Meal',
      };

    state = {
        "name": "",
        "cost": 0,
        "convenience": 0,
        "breakfast": true,
        "lunch": false,
        "dinner": false
    }

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
    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                    
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input value={this.state.name}/>
                    </Item>

                    {/* Cost Slider */}
                    <Item>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                                <Text>I want a meal that is:</Text>
                                <Text style={styles.mealDescriptor}>Text</Text>
                            </View>
                        <Slider
                        value={this.state.cost}
                        // onValueChange={(costValue) => this.costSliderChange(costValue)}
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
                                <Text style={styles.mealDescriptor}>Text</Text>
                            </View>
                        <Slider
                        value={this.state.convenience}
                        // onValueChange={(costValue) => this.costSliderChange(costValue)}
                        maximumValue={2}
                        step={1}
                        />
                        </View>
                </Item>

                {/* Meal time checkboxes */}
                <Item last>
                    <View style={styles.checkList}>
                        <Text style={styles.mealDescriptor}>I would eat this for:</Text>
                        <ListItem style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
                            <CheckBox
                                center
                                title='Breakfast'
                                value={this.state.breakfast}
                                onPress={() => this.toggleBreakfast()}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={true}
                                />
                        
                            <CheckBox
                                center
                                title='Lunch'
                                value={this.state.lunch}
                                onPress={() => this.setState({"lunch": !this.state.lunch})}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={false}
                                />
                            
    
                            <CheckBox
                                center
                                title='Dinner'
                                value={this.state.dinner}
                                onPress={() => this.setState({"dinner": !this.state.dinner})}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={false}
                                />
                            
                        </ListItem>
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
      alignItems: 'stretch'
  }
});