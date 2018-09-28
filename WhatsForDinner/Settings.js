import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Container, Footer, FooterTab, Title, Button, List, Icon, ListItem, Content, Form, Item, Input, Label, Text, Body} from 'native-base';
import Tabs from './Tabs';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Settings extends React.Component {

    meals = this.props.navigation.getParam('meals', []);

    //settings = this.props.navigation.getParam('settings', {});
    settings = this.props.navigation.state.params.settings;

    static navigationOptions = {
        title: 'Settings',
        headerLeft: null,
      };

  render() {
    return (
      <Container>
      <View style={{flex: 1, flexDirection: 'column', marginTop: 25}}>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{fontWeight: 'bold'}}>Meal Times:</Text>
        </View>
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text onPress={() => {this.settings.breakfastPicker = true; this.forceUpdate();}} style={{fontWeight: 'bold'}}>Breakfast</Text>
            <Text onPress={() => {this.settings.breakfastPicker = true; this.forceUpdate();}}>{this.settings.breakfast}</Text>
            <DateTimePicker
            mode={'time'}
            titleIOS={'Select a Breakfast time'}
            is24Hour={true}
            isVisible={this.settings.breakfastPicker}
            onConfirm={(date) => {let mins = date.getMinutes();
                if (mins < 10) {mins = "0"+mins;}
                let hours = date.getHours();
                if (hours < 10) {hours = "0"+hours;}
                this.settings.breakfast= hours+":"+mins; this.settings.breakfastPicker = false; this.forceUpdate();}}
            onCancel={() => {this.settings.breakfastPicker = false; this.forceUpdate();}}
            />
        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text onPress={() => {this.settings.lunchPicker = true; this.forceUpdate();}} style={{fontWeight: 'bold'}}>Lunch</Text>
            <Text onPress={() => {this.settings.lunchPicker = true; this.forceUpdate();}}>{this.settings.lunch}</Text>
            <DateTimePicker
            mode={'time'}
            titleIOS={'Select a Lunch time'}
            is24Hour={true}
            isVisible={this.settings.lunchPicker}
            onConfirm={(date) => {let mins = date.getMinutes();
                if (mins < 10) {mins = "0"+mins;}
                let hours = date.getHours();
                if (hours < 10) {hours = "0"+hours;}
                this.settings.lunch= hours+":"+mins; this.settings.lunchPicker = false; this.forceUpdate();}}
            onCancel={() => {this.settings.lunchPicker = false; this.forceUpdate();}}
            />
        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text onPress={() => {this.settings.dinnerPicker = true; this.forceUpdate();}} style={{fontWeight: 'bold'}}>Dinner</Text>
            <Text onPress={() => {this.settings.dinnerPicker = true; this.forceUpdate();}}>{this.settings.dinner}</Text>
            <DateTimePicker
            mode={'time'}
            titleIOS={'Select a Dinner time'}
            is24Hour={true}
            isVisible={this.settings.dinnerPicker}
            onConfirm={(date) => {let mins = date.getMinutes();
                if (mins < 10) {mins = "0"+mins;}
                let hours = date.getHours();
                if (hours < 10) {hours = "0"+hours;}
                this.settings.dinner= hours+":"+mins; this.settings.dinnerPicker = false; this.forceUpdate();}}
            onCancel={() => {this.settings.dinnerPicker = false; this.forceUpdate();}}
            />
        </View>
                            
      </View>
      
      <View>
        <Tabs navigation={this.props.navigation} meals={this.meals} settings={this.settings}> </Tabs>
      </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});