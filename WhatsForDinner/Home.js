import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, ScrollView, View, /*Button,*/ Alert, Slider} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon} from 'native-base';
import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button';
import Tabs from './Tabs';
import moment from 'moment';

export default class Home extends Component {

    meals = this.props.navigation.getParam('meals', []);

    breakfastStart;
    breakfastTime;
    breakfastEnd;
    isBreakfastTime;
    lunchStart;
    lunchTime;
    lunchEnd;
    isLunchTime;
    dinnerStart;
    dinnerTime;
    dinnerEnd;
    isDinnerTime;
    currentMeal = "Dinner";
    currentTime;

    defaultMeals = [];


    // static navigationOptions = {
    //     title: state.title,
    //     headerLeft: null,
    //   };

    static navigationOptions = ({ navigation }) => ({
        title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'find': navigation.state.params.title,
        headerLeft: null,
    });

    constructor(props) {
      super(props);
      this.state = {costValue: 0, costDescription: 'Cheap', convenienceValue: 0, convenienceDescription: 'Quick & Easy'};

    //   this.breakfastTime = "08:00";
    //   this.lunchTime = "13:00";
    //   this.dinnerTime = "20:00";

    this.breakfastTime = "08:00";
      this.lunchTime = "18:00";
      this.dinnerTime = "23:59";

      this.determineCutOffTimes();
      this.determineMealTime();

      switch(this.currentMeal) {
          case "breakfast":
            this.defaultMeals.push(0);
            break;
        case "lunch":
            this.defaultMeals.push(1);
            break;
        case "dinner":
            this.defaultMeals.push(2);
            break;
      }

    }

    
  
    render() {

      if (this.meals !== []) {
        console.log("Home Page received following meals: ");
        console.log(this.meals);
      } 
    
      

      return (
        <Container>
            <View style={styles.container}>
    
                <Text style={styles.body}>{this.getMealTimeDescription()}</Text>

                <Text style={styles.body}>Recommend me: </Text>

                {/* Meal Times Buttons */}
                <SelectMultipleGroupButton
                            containerViewStyle={{justifyContent: 'flex-start'}}
                            highLightStyle={{
                                borderColor: 'gray',
                                backgroundColor: 'transparent',
                                textColor: 'gray',
                                borderTintColor: '#007aff',
                                backgroundTintColor: 'transparent',
                                textTintColor: '#007aff',
                            }}
                            onSelectedValuesChange={(selectedValues) => this.mealTimesUpdate(selectedValues)}
                            group={[
                                { value: "Breakfasts" },
                                { value: "Lunches" },
                                { value: "Dinners" }
                            ]} 
                            defaultSelectedIndexes={this.defaultMeals}
                />

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
                            onPress={() => {this.chooseMeal();} } >
                        <Text style={{margin: 5}}>Help Me Choose My Meal!</Text>
                    </Button>
                </View>    
    
            </View>

            <Tabs navigation={this.props.navigation} meals={this.meals}/>

        </Container>
      );
    }

    mealTimesUpdate(selectedValues) {
        console.log("The selected values are:");
        console.log(selectedValues);
        console.log("Selected Values contains Breakfasts: " + selectedValues.includes("Breakfasts"));
        console.log("Selected Values contains Lunches: " + selectedValues.includes("Lunches"));
        console.log("Selected Values contains Dinners: " + selectedValues.includes("Dinners"));

    }
  
    chooseMeal() {
        let appropriateMeals = [];

        for (var i=0; i < this.meals.length; i++) {
            let currentMeal  = this.meals[i];
            if (currentMeal.cost === this.state.costValue && currentMeal.convenience === this.state.convenienceValue && currentMeal.visible === true) {
                appropriateMeals.push(currentMeal);
            }
        }

        console.log("Found " + appropriateMeals.length + " appropriate meals");

        if (appropriateMeals.length > 0) {
            let randomIndex = Math.floor(Math.random() * (appropriateMeals.length));

            this.props.navigation.navigate('ChosenMeal', {chosenMeal: appropriateMeals[randomIndex]});
        } else {
            Alert.alert("No suitable meals found!");
        }

        
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

      getPluralOfCurrentMealTime() {
        if (this.currentMeal == "lunch") {
          return "lunches"
        } else {
          return this.currentMeal + "s";
        }
      }

      checkIfBreakfastTime() {
        let currentTime = moment(this.currentTime);
    
        //Check if it's breakfast time
        let startTime = moment(this.breakfastStart, "HH:mm").subtract(1, "minutes");
        let endTime = moment(this.breakfastEnd, "HH:mm").add(1, "minutes");
    
        if ((startTime.hour() >= 12 && endTime.hour() <=12) || endTime.isBefore(startTime)) {
          //if start time is afternoon and end time is morning, end time must be the following day
          endTime.add(1, "days");
          if (currentTime.hour() <= 12) {
            currentTime.add(1, "days");
          }
        }
    
        this.isBreakfastTime = currentTime.isBetween(startTime, endTime);
      }
    
      checkIfLunchTime() {
        let currentTime = moment(this.currentTime);
        //let currentTime = moment("10:30", "HH:mm");
    
        //Check if it's lunch time
        let startTime = moment(this.lunchStart, "HH:mm").subtract(1, "minutes");
        let endTime = moment(this.lunchEnd, "HH:mm").add(1, "minutes");
    
        if ((startTime.hour() >= 12 && endTime.hour() <=12) || endTime.isBefore(startTime)) {
          //if start time is afternoon and end time is morning, end time must be the following day
          endTime.add(1, "days");
          if (currentTime.hour() <= 12) {
            currentTime.add(1, "days");
          }
        }
    
        this.isLunchTime = currentTime.isBetween(startTime, endTime);
      }
    
      checkIfDinnerTime() {
        let currentTime = moment(this.currentTime);
        //let currentTime = moment("10:30", "HH:mm");
        //
    
        //Check if it's dinner time
        let startTime = moment(this.dinnerStart, "HH:mm").subtract(1, "minutes");
        let endTime = moment(this.dinnerEnd, "HH:mm").add(1, "minutes");
    
        if ((startTime.hour() >= 12 && endTime.hour() <=12) || endTime.isBefore(startTime)) {
          //if start time is afternoon and end time is morning, end time must be the following day
          endTime.add(1, "days");
          if (currentTime.hour() <= 12) {
            currentTime.add(1, "days");
          }
        }
    
        this.isDinnerTime = currentTime.isBetween(startTime, endTime);
      }
    
      determineMealTime() {
        this.currentTime = moment();
        //this.currentTime = moment("10:00", "HH:mm");
        this.checkIfBreakfastTime();
        this.checkIfLunchTime();
        this.checkIfDinnerTime();
    
        if (this.isDinnerTime) {
          this.currentMeal = "dinner";
        } else if (this.isLunchTime) {
          this.currentMeal = "lunch";
        }else {
          this.currentMeal = "breakfast";
        }
    
        console.log("It's currently " + this.currentMeal);
        let meal = this.currentMeal.charAt(0).toUpperCase() + this.currentMeal.slice(1);
        meal = "What's For " + meal + "?"
        this.props.navigation.setParams({ title: meal })
    
      }
    
      determineCutOffTimes() {
        let diffBetweenBreakfastAndLunch = moment(this.lunchTime, "HH:mm").diff(moment(this.breakfastTime, "HH:mm"));
        let dBL = moment.duration(diffBetweenBreakfastAndLunch);
        let breakfastToLunch =  Math.floor(dBL.asHours()) + moment.utc(diffBetweenBreakfastAndLunch).format(":mm");
    
        let minsAfterBreakfast = (moment.duration(breakfastToLunch).asMinutes()/2);
        let breakfastCutOff = moment(this.breakfastTime, "HH:mm").add(minsAfterBreakfast, "minutes").format("HH:mm");
    
        let diffBetweenLunchAndDinner = moment(this.dinnerTime, "HH:mm").diff(moment(this.lunchTime, "HH:mm"));
        let dLD = moment.duration(diffBetweenLunchAndDinner);
        let lunchToDinner =  Math.floor(dLD.asHours()) + moment.utc(diffBetweenLunchAndDinner).format(":mm");
    
        let minsAfterLunch = (moment.duration(lunchToDinner).asMinutes()/2);
        let lunchCutOff = moment(this.lunchTime, "HH:mm").add(minsAfterLunch, "minutes").format("HH:mm");
    
        let diffBetweenDinnerAndBreakfast1 = moment(this.breakfastTime, "HH:mm").add(1, "day").diff(moment(this.dinnerTime, "HH:mm"));
        let dDB1 = moment.duration(diffBetweenDinnerAndBreakfast1);
        let dinnerToBreakfast1 =  Math.floor(dDB1.asHours()) + moment.utc(diffBetweenDinnerAndBreakfast1).format(":mm");
    
        let minsAfterDinner = (moment.duration(dinnerToBreakfast1).asMinutes()/2);
        let dinnerCutOff = moment(this.dinnerTime, "HH:mm").add(minsAfterDinner, "minutes").format("HH:mm");
    
        console.log(
          "Breakfast Time is: " + this.breakfastTime + "\n" +
          "Then wait " + breakfastToLunch + " until lunch" + "\n" +
          "The cut-off time for breakfast is: " + breakfastCutOff + "\n" +
          "Lunch Time is: " + this.lunchTime + "\n" +
          "Then wait " + lunchToDinner + " until dinner" + "\n" +
          "The cut-off time for lunch is: " + lunchCutOff + "\n" +
          "Dinner Time is: " + this.dinnerTime + "\n" +
          "Then wait " + dinnerToBreakfast1 + " until breakfast" + "\n" +
          "The cut-off time for dinner is: " + dinnerCutOff + ". \n"
        );
    
        //
    
    
    
        this.breakfastEnd = breakfastCutOff;
        this.lunchEnd = lunchCutOff;
        this.dinnerEnd = dinnerCutOff;
    
        this.breakfastStart = moment(dinnerCutOff, "HH:mm").add(1, "minute").format("HH:mm");
        this.lunchStart = moment(breakfastCutOff, "HH:mm").add(1, "minute").format("HH:mm");
        this.dinnerStart = moment(lunchCutOff, "HH:mm").add(1, "minute").format("HH:mm");
    
        console.log(
          "Breakfast time is " + this.breakfastTime + ", but it is available from " + this.breakfastStart + " until " + this.breakfastEnd + ". \n" +
          "Lunch time is " + this.lunchTime + ",  but it is available from " + this.lunchStart + " until " + this.lunchEnd + ". \n" +
          "Dinner time is " + this.dinnerTime + ", but it is available from " + this.dinnerStart + " until " + this.dinnerEnd + "."
        );
    
    
      }

      getMealTimeDescription() {
        switch (this.currentMeal) {
          case "breakfast": {
            //if it's breakfast
    
            //check if it's before defined breakfast time or after
            let startTime = moment(this.breakfastStart, "HH:mm").subtract(1, "minutes");
            let endTime = moment(this.breakfastTime, "HH:mm").add(1, "minutes");
    
            let earlyBreakfast = this.currentTime.isBetween(startTime,endTime);
    
            //calculate the difference in time from the defined breakfast time
            let timeDiff = this.currentTime.diff(endTime.subtract(1, "minutes"), "minutes");
            let timeDiffString = this.convertMinutesToHoursAndMinutes(timeDiff);
    
            if (earlyBreakfast) { //before the defined meal time
              return "I hope you're hungry!\n There's only " + timeDiffString + " until breakfast time!";
            } else {
              return "You're a bit slow this morning!\n Breakfast was " + timeDiffString + " ago!";
            }
    
            break;
          }
          case "lunch": {
            //if it's lunch
            //check if it's before defined lunch time or after
            let startTime = moment(this.lunchStart, "HH:mm").subtract(1, "minutes");
            let endTime = moment(this.lunchTime, "HH:mm").add(1, "minutes");
    
            let earlyLunch = this.currentTime.isBetween(startTime,endTime);
    
            //calculate the difference in time from the defined lunch time
            let timeDiff = this.currentTime.diff(endTime, "minutes");
            let timeDiffString = this.convertMinutesToHoursAndMinutes(timeDiff);
    
            if (earlyLunch) { //before the defined meal time
              return "Hang in there!\n There's only " + timeDiffString + " until lunch time!";
            } else {
              return "You must be having a busy day!\n Lunch was " + timeDiffString + " ago!";
            }
    
            break;
          }
          case "dinner": {
            //if it's dinner
            //check if it's before defined dinner time or after
            let startTime = moment(this.dinnerStart, "HH:mm").subtract(1, "minutes");
            let endTime = moment(this.dinnerTime, "HH:mm").add(1, "minutes");
    
            let earlyDinner = this.currentTime.isBetween(startTime,endTime);
    
            //calculate the difference in time from the defined dinner time
            let timeDiff = this.currentTime.diff(endTime, "minutes");
            let timeDiffString = this.convertMinutesToHoursAndMinutes(timeDiff);
    
            if (earlyDinner) { //before the defined meal time
              return "Not long now!\n There's only " + timeDiffString + " until dinner time!";
            } else {
              return "I bet you're starving!\n Dinner was " + timeDiffString + " ago!";
            }
            break;
          }
        }
      }

      convertMinutesToHoursAndMinutes(minutes) {
        let minuteAmount = minutes;
        if (minuteAmount < 0) {
          minuteAmount = minuteAmount * -1;
        }
        let hourAmount = 0;
        while (minuteAmount >= 60) {
          hourAmount++;
          minuteAmount = minuteAmount - 60;
        }
        if (hourAmount == 0) {
          if (minuteAmount > 1) {
            return minuteAmount + " minutes";
          } else {
            return minuteAmount + " minute";
          }
    
        } else if (minuteAmount == 0) {
          if (hourAmount > 1) {
            return hourAmount + " hours";
          } else {
            return hourAmount + " hour";
          }
    
        } else {
          let hourUnit = "hour";
          let minuteUnit = "minute";
          if (hourAmount > 1) {
            hourUnit = "hours";
          }
          if (minuteAmount > 1) {
            minuteUnit = "minutes";
          }
    
          return hourAmount + " " + hourUnit + " " + minuteAmount + " " + minuteUnit;
        }
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