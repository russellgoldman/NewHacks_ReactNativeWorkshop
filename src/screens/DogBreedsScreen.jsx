import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import styled from 'styled-components';

import DogCard from '../components/DogCard';
let link = 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-card-small.jpg'
let name = 'Shibu Inu'
let leftShift = 10
export default class DogBreedsScreen extends Component {
    render() {
        const { navigation } = this.props;
        StatusBar.setBarStyle('dark-content', true);

        return (
            <Container>
                <ScreenTitle>Dog Breeds</ScreenTitle>
                <DogCard image={link} title={name} leftShift={leftShift} />
            </Container>
        );
    }
}

const Container = styled.SafeAreaView`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const ScreenTitle = styled.Text`
    font-family: FugazOne-Regular;
    font-size: 36px;
    align-self: flex-start;
    margin-top: 5%; 
    left: ${leftShift}%;
    color: rgba(234, 123, 22, 0.85);
`;