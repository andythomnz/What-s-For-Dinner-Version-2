import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Footer, FooterTab, Title, Button, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class Tabs extends React.Component {
    meals = [];

    newMeals = this.props.meals;

    newSettings = this.props.settings;


    defaultSettings = {
        breakfast: '09:00',
        lunch: '13:00',
        dinner: '19:00',
        breakfastPicker: false,
        lunchPicker: false,
        dinnerPicker: false
    };

    settings = Object.assign({}, this.defaultSettings);

    //Default meals when app is used first time
    defaultMeals = [
        {
            "name": "Spaghetti Bolognese",
            "convenience": 2,
            "cost": 1,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Toast",
            "convenience": 0,
            "cost": 0,
            "breakfast": true,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Instant Noodles",
            "convenience": 0,
            "cost": 0,
            "breakfast": true,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Soup",
            "convenience": 0,
            "cost": 0,
            "breakfast": true,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "McDonalds",
            "convenience": 0,
            "cost": 0,
            "breakfast": true,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Caesar Salad",
            "convenience": 1,
            "cost": 1,
            "breakfast": false,
            "lunch": true,
            "dinner": false,
            "visible": true
        }
    ];

    meals = [];
      

  constructor(props) {
      super(props);
      this.state = {activeTab: 0};
      
    //   if (Object.keys(this.settings).length === 0 && this.settings.constructor === Object) {
    //   //if(this.settings == null) {
    //     console.log("For some reason this.settings in Tabs is null");
    //     //this.settings = this.defaultSettings;
    //     this.settings = Object.assign({}, this.defaultSettings);
    //     console.log("this.settings inside Tabs is now...:");
    //     console.log(this.settings);
    //   }
      
      this.meals = this.defaultMeals;
    //   if (Object.keys(this.settings).length === 0 && this.settings.constructor === Object) {
    //       console.log("defaulting the settings.....");
    //     this.settings = Object.assign({}, this.defaultSettings);
    //   }
      
  }

  componentDidUpdate() {

    // //Check if there has been a change to the settings
    // let newSettings = this.props.settings;
    // if (newSettings != {} && newSettings != undefined) {
    //     console.log("updating the settings!");
    //     console.log("the new settings are: ");
    //     console.log(newSettings);
    //     this.settings = newSettings;
    // }

    

  }
    
  render() {

    if (this.props.navigation.getParam('meals', []).length > 0) {
        // console.log("TABS GOT PASSED A NEW SET OF MEALS!:");
        // console.log(this.props.navigation.getParam('meals', []));
        this.meals = this.props.navigation.getParam('meals', []);
    }

    //Check if there is a new meal to be added
    if (this.newMeals !== undefined && (this.newMeals.length >= this.meals.length)) {
        // console.log("Updating the list of meals in the Tabs component");
        this.meals = this.newMeals.slice(0);
    }

    if (this.newSettings !== undefined ) {
        console.log("newSettings contains: ");
        console.log(this.newSettings);
        console.log("Settings Tabs' settings to newSettings");
        this.settings = this.newSettings;
        this.newSettings = undefined;
    }

    console.log("Tabs got rendered with the following settings: ");
    console.log(this.settings);




    console.log("Meals contains the following: ");
    console.log(this.meals);
    
    return (
        <StyleProvider style={getTheme(material)}>
            <Footer >
                <StyleProvider style={getTheme(material)}>
                    <FooterTab>
                        <Button
                        active = {this.state.activeTab === 0}
                        onPress={() => {this.props.navigation.replace('Home', {meals: this.meals, settings: this.settings}); this.setState({activeTab: 0});}}
                        transparent>
                            <Icon size={30} color={'#666161'} name={'ios-restaurant'} />
                            <Text numberOfLines={1}>What To Eat</Text>
                        </Button>
                    </FooterTab>
                </StyleProvider>

                <FooterTab>
                    <Button
                    active = {this.state.activeTab === 1}
                    onPress={() => {this.props.navigation.replace('Meals', {meals: this.meals, settings: this.settings});  this.setState({activeTab: 1});}}
                    transparent>
                        <Icon size={30} color={'#666161'} name={'md-pizza'} />
                        <Text numberOfLines={1}>Meals</Text>
                    </Button>
                </FooterTab>

                <FooterTab>
                    <Button
                    active = {this.state.activeTab === 2}
                    onPress={() => {this.props.navigation.replace('Settings', {meals: this.meals, settings: this.settings}); this.setState({activeTab: 2});}}
                    transparent >
                        <Icon size={25} color={'#666161'} name={'md-settings'}/>
                        <Text numberOfLines={1}>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </StyleProvider>
    );
  }
}

