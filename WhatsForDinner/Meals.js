import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon, List, ListItem, Content} from 'native-base';
import Tabs from './Tabs';

export default class Meals extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Meals",
        headerLeft: null,
        headerRight: <Text style={{fontWeight: 'bold', fontSize: 18}} onPress={()=>{ navigation.navigate('NewMeal'); }}> +   </Text>,
      });

  
      
  render() {
    const meals = this.props.navigation.getParam('meals', []);
    
    return (
      <Container>
        <View style={styles.container}>

            <Content>

                <View>
                    <List
                    dataArray={meals}
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