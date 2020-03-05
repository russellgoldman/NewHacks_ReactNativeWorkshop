import React, { Component } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled from 'styled-components';
import Logo from '../../assets/images/Logo.png';

import { orange, white } from '../../colors';
const { height, width } = Dimensions.get('screen')

export default class Home extends Component {
    render() {
        const { navigation } = this.props;
        StatusBar.setBarStyle('dark-content', true);

        return (
            <Background>
                <Container>
                    <AppTitle>PawFindr</AppTitle>
                    <LogoImage source={Logo} />
                    <ButtonContainer onPress={() => navigation.navigate('DogBreeds')}>
                        <ButtonText>Get started!</ButtonText>
                    </ButtonContainer>
                </Container>
            </Background>
        );
    }
}

const Background = styled.View`
    background-color: ${orange};
`;

const Container = styled.SafeAreaView`
    height: ${height}px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const AppTitle = styled.Text`
    margin-top: ${height * .2}px;
    font-family: GrandHotel-Regular;
    font-size: 80px;
    color: ${white};
`;

const LogoImage = styled.Image`
    height: 100px;
    width: 100px;
`;

const ButtonContainer = styled.TouchableOpacity`
    height: 70px;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    padding-left: ${width * 0.1}px;
    padding-right: ${width * 0.1}px;
    background-color: ${white};
    border-radius: 20px;
    bottom: ${height * .015}%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonText = styled.Text`
    font-family: Futura-Medium;
    font-size: 28px;
    color: ${orange};
`;