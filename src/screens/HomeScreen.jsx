import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AppTitle = styled.Text`
    font-family: GrandHotel-Regular;
`;

export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <AppTitle>PawFindr App</AppTitle>
            </Container>
        );
    }
}