/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, ScrollView, View, Button, Alert, Slider} from 'react-native';


type Props = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {costValue: 0, costDescription: 'Cheap', convenienceValue: 0, convenienceDescription: 'Quick & Easy'};
  }

  render() {
    return (
      <View>


        <Text style={styles.welcome}>Whats For Dinner</Text>
        <Text style={styles.body}>You must be having a busy day Dinner was 3 hours ago</Text>

        {/* Cost Slider */}
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>I want a meal that is:</Text>
            <Text>{this.state.costDescription}</Text>
          </View>
          <Slider
            value={this.state.costValue}
            onValueChange={(costValue) => this.costSliderChange(costValue)}
            maximumValue={2}
            step={1}
            />
        </View>

        {/* Convenience Slider */}
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>I want a meal that is:</Text>
            <Text>{this.state.convenienceDescription}</Text>
          </View>
          <Slider
            value={this.state.convenienceValue}
            onValueChange={(convenienceValue) => this.convenienceSliderChange(convenienceValue)}
            maximumValue={2}
            step={1}
            />
        </View>

      </View>
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

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
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
  }
});
