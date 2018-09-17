import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Footer, FooterTab, Title, Button, Icon} from 'native-base';

export default class Tabs extends React.Component {
  render() {
    return (
        <Footer>
            <FooterTab>
                <Button 
                onPress={() => {this.props.navigation.navigate('Home');}}
                transparent>
                    <Icon size={30} color={'#fff'} name={'restaurant'} />
                    <Text numberOfLines={1}>What To Eat</Text>
                </Button>
            </FooterTab>

            <FooterTab>
                <Button 
                onPress={() => {this.props.navigation.navigate('Meals');}}
                transparent>
                    <Icon size={30} color={'#fff'} name={'pizza'} />
                    <Text numberOfLines={1}>Meals</Text>
                </Button>
            </FooterTab>

            <FooterTab>
                <Button 
                onPress={() => {this.props.navigation.navigate('Settings');}}
                transparent >
                    <Icon size={25} color={'#fff'} name={'ios-cog'}/>
                    <Text numberOfLines={1}>Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
  }
}

