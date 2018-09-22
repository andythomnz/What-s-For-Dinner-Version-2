import React from 'react';
import { StyleSheet, View, Slider, Image, ActivityIndicator} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, List, Icon, ListItem, Content, Form, Item, Input, Label, Text, Body} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';


export default class ChosenMeal extends React.Component {

    chosenMeal = this.props.navigation.getParam('chosenMeal', {});

    state = {
        visible: true
    };

    

    static navigationOptions = {
        title: 'The answer is...',
      };

    costDescriptions = ["Cheap", "Moderate", "Expensive"];
    convenienceDescriptions=["Quick & Easy", "Moderate", "Complex"];
   
      
  render() {
      console.log("Chosen Meal pages's chosenMeal is: ");
      console.log(this.chosenMeal);

    return (
      <Container>

        <View style={styles.container}>

            <Content>

                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>

                    <View style={{ flex: 1, backgroundColor: 'blue' }}>
                        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
                    </View>
                    
                
                    <Text style={styles.name}>{this.chosenMeal.name}</Text>
                

                    <Text>Cost: {this.costDescriptions[this.chosenMeal.cost]}</Text>

                    <Text>Convenience: {this.convenienceDescriptions[this.chosenMeal.convenience]}</Text>

                    
                    <Image
                    style={{width: 200, height: 280}}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Jordan-19A-017_-_A_really_big_sandbox.jpg'}}
                    onLoadEnd={ ()=>{ this.setState({ visible: false });}}>

                    </Image>
                
            

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
    fontSize: 26,
    fontWeight: 'bold'
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