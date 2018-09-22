import React from 'react';
import { StyleSheet, View, Slider, Image, ActivityIndicator, Dimensions} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, List, Icon, ListItem, Content, Form, Item, Input, Label, Text, Body} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';


export default class ChosenMeal extends React.Component {

    chosenMeal = this.props.navigation.getParam('chosenMeal', {});

    state = {
        visible: true,
        imageURL: "123345567889.com/12334456778.jpg",
        imageWidth: 0,
        imageHeight: 0
    };

    

    static navigationOptions = {
        title: 'The answer is...',
      };

    costDescriptions = ["Cheap", "Moderate", "Expensive"];
    convenienceDescriptions=["Quick & Easy", "Moderate", "Complex"];

    constructor(props) {
        super(props);
        this.apiRequest();
      }


    async apiRequest() {
        try {
            let url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDFYAcCzPMsvZgVHr8z7Tz1lsrPKZyjChM&cx=018029367248808413633:jdmvtl6gj_s&q=";
            url = url + this.chosenMeal.name;
            url = url + "&searchType=image&imgSize=medium";
          let response = await fetch(url);
          let responseJson = await response.json();
          console.log(responseJson);
          
          let imageURL = responseJson.items[0].link;
          let imageWidth = responseJson.items[0].image.width;
          let imageHeight = responseJson.items[0].image.height;

          let deviceWidth = Dimensions.get('window').width;
          let deviceHeight = Dimensions.get('window').height;

          while ((imageWidth > (deviceWidth * 0.75)) || (imageHeight > (deviceHeight * 0.66))) {
            imageWidth = imageWidth * 0.95;
            imageHeight = imageHeight * 0.95;
          }

          this.setState({imageURL: imageURL});
          this.setState({imageWidth: imageWidth});
          this.setState({imageHeight: imageHeight});
          this.setState({visible: true});

        } catch (error) {
          console.error(error);
        }
      }

      componentDidMount() {
        this.setState({visible: true});
      }
   
      
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
                    style={{
                        width: this.state.imageWidth,
                        height: this.state.imageHeight}}
                    source={{uri: this.state.imageURL}}
                    onLoadStart={ ()=>{ this.setState({ visible: true });}}
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