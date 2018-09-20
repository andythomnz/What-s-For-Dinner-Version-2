import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon} from 'native-base';
import Tabs from './Tabs';

export default class Settings extends React.Component {

    static navigationOptions = {
        title: 'Settings',
        headerLeft: null,
      };

  render() {
    return (
      <Container>
      <View style={styles.container}>
        <Text>Add settings here!</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});