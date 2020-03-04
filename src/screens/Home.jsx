import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import Logo from '../../assets/images/Logo.png';

import { orange, white } from '../../colors';

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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const AppTitle = styled.Text`
    margin-top: 40%;
    font-family: GrandHotel-Regular;
    font-size: 80px;
    color: ${white};
`;

const LogoImage = styled.Image`
    height: 100px;
    width: 100px;
`;

const ButtonContainer = styled.TouchableOpacity`
    display: flex;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 65%;
    background-color: ${white};
    border-radius: 20px;
    bottom: 12.5%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonText = styled.Text`
    font-family: Futura-Medium;
    font-size: 28px;
    color: ${orange};
`;