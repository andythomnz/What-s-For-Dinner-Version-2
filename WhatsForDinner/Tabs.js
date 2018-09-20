import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Footer, FooterTab, Title, Button, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class Tabs extends React.Component {

  constructor(props) {
      super(props);
      this.state = {activeTab: 0};
  }
    
  render() {
    return (
        <StyleProvider style={getTheme(material)}>
            <Footer >
                <StyleProvider style={getTheme(material)}>
                    <FooterTab>
                        <Button
                        active = {this.state.activeTab === 0}
                        onPress={() => {this.props.navigation.replace('Home'); this.setState({activeTab: 0});}}
                        transparent>
                            <Icon size={30} color={'#666161'} name={'ios-restaurant'} />
                            <Text numberOfLines={1}>What To Eat</Text>
                        </Button>
                    </FooterTab>
                </StyleProvider>

                <FooterTab>
                    <Button
                    active = {this.state.activeTab === 1}
                    onPress={() => {this.props.navigation.replace('Meals');  this.setState({activeTab: 1});}}
                    transparent>
                        <Icon size={30} color={'#666161'} name={'md-pizza'} />
                        <Text numberOfLines={1}>Meals</Text>
                    </Button>
                </FooterTab>

                <FooterTab>
                    <Button
                    active = {this.state.activeTab === 2}
                    onPress={() => {this.props.navigation.replace('Settings'); this.setState({activeTab: 2});}}
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

