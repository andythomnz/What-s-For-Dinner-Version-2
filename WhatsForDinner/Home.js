import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, ScrollView, View, /*Button,*/ Alert, Slider} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon} from 'native-base';
import Tabs from './Tabs';

export default class Home extends Component {
    static navigationOptions = {
        title: 'What\'s For Dinner?',
        headerLeft: null,
      };

    constructor(props) {
      super(props);
      this.state = {costValue: 0, costDescription: 'Cheap', convenienceValue: 0, convenienceDescription: 'Quick & Easy'};
    }
  
    render() {
      return (
        <Container>
            <View style={styles.container}>
    
                <Text style={styles.body}>You must be having a busy day! Dinner was 3 hours ago!</Text>
        
                {/* Cost Slider */}
                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>I want a meal that is:</Text>
                    <Text style={styles.mealDescriptor}>{this.state.costDescription}</Text>
                    </View>
                    <Slider
                    value={this.state.costValue}
                    onValueChange={(costValue) => this.costSliderChange(costValue)}
                    maximumValue={2}
                    step={1}
                    />
                </View>
        
                {/* Convenience Slider */}
                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>I want a meal that is:</Text>
                    <Text style={styles.mealDescriptor}>{this.state.convenienceDescription}</Text>
                    </View>
                    <Slider
                    value={this.state.convenienceValue}
                    onValueChange={(convenienceValue) => this.convenienceSliderChange(convenienceValue)}
                    maximumValue={2}
                    step={1}
                    />
                </View>

                
        
                {/* Choose Meal Button */}
                
                <View>
                    <Button style={{backgroundColor: '#4cd964', alignItems: 'center'}}
                            onPress={() => {Alert.alert('You tapped the button!');}} >
                        <Text style={{margin: 5}}>Help Me Choose My Dinner!</Text>
                    </Button>
                </View>    
    
            </View>

            <Tabs navigation={this.props.navigation}/>

        </Container>
      );
    }
  
  
    costSliderChange(costValue) {
      this.setState({costValue});
      let costDescription = "Cheap";
      if (costValue === 1) {
        costDescription = "Moderate";
      } else if (costValue === 2) {
        costDescription = "Expensive";
      }
      let convenienceDescription = this.state.convenienceDescription;
      let convenienceValue = this.state.convenienceValue;
  
      this.setState({costValue, costDescription, convenienceValue, convenienceDescription});
    }
  
    convenienceSliderChange(convenienceValue) {
      this.setState({convenienceValue});
      let convenienceDescription = "Quick & Easy";
      if (convenienceValue === 1) {
        convenienceDescription = "Moderate";
      } else if (convenienceValue === 2) {
        convenienceDescription = "Complex";
      }
  
      let costValue = this.state.costValue;
      let costDescription = this.state.costDescription;
  
      this.setState({costValue, costDescription, convenienceValue, convenienceDescription});
    }
  
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 30,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    body: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
    },
    mealDescriptor: {
      fontWeight: 'bold',
    }
  });