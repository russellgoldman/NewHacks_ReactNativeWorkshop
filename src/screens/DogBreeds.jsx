import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import DogCard from '../components/DogCard';

import data from '../../assets/DogBreedsData';
import { orange, white } from '../../colors';

const { height, width } = Dimensions.get('screen')

export default class DogBreeds extends Component {
    navigateToDogSelection(image, name, description, imageLoaded) {
        if (!imageLoaded) {
            return;
        }

        const { navigation } = this.props;
        navigation.navigate('DogSelection', {
            image,
            name,
            description
        });
    }

    render() {
        return (
            <Container>
                <ScreenTitleBar>
                    <ScreenTitle>Dog Breeds</ScreenTitle>
                </ScreenTitleBar>
                <DogList
                    data={data}
                    renderItem={({ item, index }) => {
                        const { image, name, description } = item;
                        return (
                            // add margin-top to first card
                            <DogCard image={image} name={name} description={description} first={index === 0}
                                onPress={this.navigateToDogSelection.bind(this)} />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.name}
                />
            </Container>
        );
    }
}

const Container = styled.View`
    height: ${height}px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${white};
`;

const ScreenTitle = styled.Text`
    font-family: FugazOne-Regular;
    font-size: 36px;
    align-self: flex-start;
    top: ${height * 0.02}px;
    left: ${width * .1}px;
    color: ${orange};
`;

const ScreenTitleBar = styled.View`
    justify-content: center;
    z-index: 3;
    height: ${height * .15}px;
    width: 100%;
    background-color: ${white};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.50);
    elevation: 10;
`

const DogList = styled.FlatList``;