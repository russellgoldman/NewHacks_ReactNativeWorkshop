import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import styled from 'styled-components';

export default class DogBreedsScreen extends Component {
    render() {
        const { navigation } = this.props;
        StatusBar.setBarStyle('light-content', true);

        return (
            <View />
        );
    }
}