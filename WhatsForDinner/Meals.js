import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon, List, ListItem, Content} from 'native-base';
import Tabs from './Tabs';

export default class Meals extends React.Component {

    static navigationOptions = {
        title: 'Meals',
        headerLeft: null,
      };

  state = {
      meals: [
        {
            "name": "Spaghetti Bolognese",
            "convenience": 2,
            "cost": 1
        },
        {
            "name": "Toast",
            "convenience": 0,
            "cost": 0
        },
        {
            "name": "Caesar Salad",
            "convenience": 1,
            "cost": 1
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