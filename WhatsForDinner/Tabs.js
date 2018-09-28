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

    tab = this.props.tab;
    homeTabColor;
    mealsTabColor;


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
        },
        {
            "name": "Porridge",
            "cost": 0,
            "convenience": 1,
            "breakfast": true,
            "lunch": false,
            "dinner": false,
            "visible": true
        },
        {
            "name": "Pancakes",
            "cost": 0,
            "convenience": 2,
            "breakfast": true,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "French toast with bacon",
            "cost": 2,
            "convenience": 2,
            "breakfast": true,
            "lunch": true,
            "dinner": false,
            "visible": true
        },
        {
            "name": "Omlette",
            "cost": 0,
            "convenience": 1,
            "breakfast": true,
            "lunch": false,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Toasted sandwhich",
            "cost": 0,
            "convenience": 1,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Sushi",
            "cost": 2,
            "convenience": 0,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Krishna food",
            "cost": 0,
            "convenience": 0,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Stir Fry",
            "cost": 1,
            "convenience": 1,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Nachos",
            "cost": 0,
            "convenience": 1,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Nasi Goreng",
            "cost": 0,
            "convenience": 2,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Chicken Katsu",
            "cost": 1,
            "convenience": 0,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
            "visible": true
        },
        {
            "name": "Pad Thai",
            "cost": 1,
            "convenience": 0,
            "breakfast": false,
            "lunch": true,
            "dinner": true,
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

    //Check which tab to highlight
    console.log("The value for tab is: " + this.tab);
    if (this.tab === "Home") {
        console.log("Setting home tab colour");
        this.homeTabColor = "#007aff";
        this.mealsTabColor = "#666161";
    } else if (this.tab === "Meals") {
        console.log("Setting meal tab colour");
        this.homeTabColor =  "#666161";
        this.mealsTabColor = "#007aff";
    }
    //console.log("Home Tab Colour is: " + this.homeTabColor + " and ")
    return (
        <StyleProvider style={getTheme(material)}>
            <Footer >
                <StyleProvider style={getTheme(material)}>
                    <FooterTab>
                        <Button
                        active = {this.state.activeTab === 0}
                        onPress={() => {this.props.navigation.replace('Home', {meals: this.meals, settings: this.settings});}}
                        transparent>
                            <Icon size={30} color={this.homeTabColor} name={'ios-restaurant'} />
                            <Text style={{color: this.homeTabColor}} numberOfLines={1}>What To Eat</Text>
                        </Button>
                    </FooterTab>
                </StyleProvider>

                <FooterTab>
                    <Button
                    active = {this.state.activeTab === 1}
                    onPress={() => {this.props.navigation.replace('Meals', {meals: this.meals, settings: this.settings});}}
                    transparent>
                        <Icon size={30} color={this.mealsTabColor} name={'md-pizza'} />
                        <Text style={{color: this.mealsTabColor}} numberOfLines={1}>Meals</Text>
                    </Button>
                </FooterTab>

                {/* <FooterTab>
                    <Button
                    active = {this.state.activeTab === 2}
                    onPress={() => {this.props.navigation.replace('Settings', {meals: this.meals, settings: this.settings}); this.setState({activeTab: 2});}}
                    transparent >
                        <Icon size={25} color={'#666161'} name={'md-settings'}/>
                        <Text numberOfLines={1}>Settings</Text>
                    </Button>
                </FooterTab> */}
            </Footer>
        </StyleProvider>
    );
  }
}

