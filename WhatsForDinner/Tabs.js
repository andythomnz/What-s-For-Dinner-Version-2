import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Footer, FooterTab, Title, Button, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class Tabs extends React.Component {
    meals = [];

    newMeals = this.props.meals;


    defaultSettings = {
        breakfast: '09:00',
        lunch: '13:00',
        dinner: '19:00',
        breakfastPicker: false,
        lunchPicker: false,
        dinnerPicker: false
    };

    settings = {};
      

  constructor(props) {
      super(props);
      this.state = {activeTab: 0};
      this.settings = this.defaultSettings;
  }

  componentDidUpdate() {
    // if (this.newMeals !== undefined && (this.newMeals.length >= this.meals.length)) {
    //     console.log("Updating the list of meals in the Tabs component");
    //     this.meals = this.newMeals.slice(0);
    // }

    // let mealToDelete = this.props.navigation.getParam('mealToDelete', {});
    // if (mealToDelete !== 'undefined') {
    //     console.log("found a meal to be deleted");
    //     let indexToDelete = this.meals.indexOf(mealToDelete);
    //     console.log("I should delete " + mealToDelete.name);
    //     console.log("The meals list currently contains");
    //     console.log(this.meals);
    //     console.log("the index to be deleted is: " + indexToDelete);
    //     if (indexToDelete > -1) {
    //         this.meals.splice(indexToDelete,1);
    //         console.log("After deletion, meals now includes: ");
    //         console.log(this.meals);
    //         this.forceUpdate();
    //     }
    // }


    // console.log("Meals contains the following: ");
    // console.log(this.meals);

    //this.forceUpdate();

    //Check if there has been a change to the settings
    let newSettings = this.props.settings;
    if (newSettings != {} && newSettings != undefined) {
        console.log("updating the settings!");
        console.log("the new settings are: ");
        console.log(newSettings);
        this.settings = newSettings;
    }

  }
    
  render() {

    // if (this.newMeals !== undefined && (this.newMeals.length >= this.meals.length)) {
    //     console.log("Updating the list of meals in the Tabs component");
    //     this.meals = this.newMeals.slice(0);
    // }

    // let mealToDelete = this.props.navigation.getParam('mealToDelete', {});
    // if (mealToDelete !== undefined) {
    //     console.log("found a meal to be deleted");
    //     let indexToDelete = this.meals.indexOf(mealToDelete);
    //     console.log("I should delete " + mealToDelete.name);
    //     if (indexToDelete > -1) {
    //         this.meals.splice(indexToDelete,1);
    //     }
    // }


    // console.log("Meals contains the following: ");
    // console.log(this.meals);

    // let newSettings = this.props.navigation.getParam('settings', {});
    // if (newSettings != {}) {
    //     console.log("updating settings");
    //     this.settings = newSettings;
    //     console.log("Settings are in Tabs as follows:");
    //     console.log(this.settings);
    // }

    //Check if there is a new meal to be added
    if (this.newMeals !== undefined && (this.newMeals.length >= this.meals.length)) {
        console.log("Updating the list of meals in the Tabs component");
        this.meals = this.newMeals.slice(0);
    }

    //Check if there is a meal to be deleted
    let mealToDelete = this.props.navigation.getParam('mealToDelete', {});
    if (mealToDelete !== 'undefined') {
        console.log("found a meal to be deleted");
        let indexToDelete = this.meals.indexOf(mealToDelete);
        console.log("I should delete " + mealToDelete.name);
        console.log("The meals list currently contains");
        console.log(this.meals);
        console.log("the index to be deleted is: " + indexToDelete);
        if (indexToDelete > -1) {
            this.meals.splice(indexToDelete,1);
            console.log("After deletion, meals now includes: ");
            console.log(this.meals);
        }
    }

    // //Check if there has been a change to the settings
    // let newSettings = this.props.settings;
    // if (newSettings != {} && newSettings != undefined) {
    //     console.log("updating the settings!");
    //     console.log("the new settings are: ");
    //     console.log(newSettings);
    //     this.settings = newSettings;
    // }




    console.log("Meals contains the following: ");
    console.log(this.meals);
    
    return (
        <StyleProvider style={getTheme(material)}>
            <Footer >
                <StyleProvider style={getTheme(material)}>
                    <FooterTab>
                        <Button
                        active = {this.state.activeTab === 0}
                        onPress={() => {this.props.navigation.replace('Home', {meals: this.meals}); this.setState({activeTab: 0});}}
                        transparent>
                            <Icon size={30} color={'#666161'} name={'ios-restaurant'} />
                            <Text numberOfLines={1}>What To Eat</Text>
                        </Button>
                    </FooterTab>
                </StyleProvider>

                <FooterTab>
                    <Button
                    active = {this.state.activeTab === 1}
                    onPress={() => {this.props.navigation.replace('Meals', {meals: this.meals});  this.setState({activeTab: 1});}}
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

