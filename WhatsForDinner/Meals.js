import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon, List, ListItem, Content} from 'native-base';
import Tabs from './Tabs';

export default class Meals extends React.Component {

    // static navigationOptions = {
    //     headerTitle: 'Meals',
    //     headerLeft: null,
    //     headerRight: (
    //         <Text style={{fontWeight: 'bold', fontSize: 18}} onPress={() => this.props.navigation.navigate('NewMeal')}> +   </Text>
    //       ),
    //   };

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Meals",
        headerLeft: null,
        headerRight: <Text style={{fontWeight: 'bold', fontSize: 18}} onPress={()=>{ navigation.navigate('NewMeal'); }}> +   </Text>,
      });

  state = {
      meals: [
        {
            "name": "Spaghetti Bolognese",
            "convenience": 2,
            "cost": 1,
            "breakfast": false,
            "lunch": true,
            "dinner": true
        },
        {
            "name": "Toast",
            "convenience": 0,
            "cost": 0,
            "breakfast": true,
            "lunch": true,
            "dinner": true
        },
        {
            "name": "Caesar Salad",
            "convenience": 1,
            "cost": 1,
            "breakfast": false,
            "lunch": true,
            "dinner": false
        }]
  }
      
  render() {
    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View>
                    <List
                    dataArray={this.state.meals}
                    renderRow={(meal) =>
                    <ListItem>
                        <Text>{meal.name}</Text>
                    </ListItem>
                    }>
                    </List>
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
});