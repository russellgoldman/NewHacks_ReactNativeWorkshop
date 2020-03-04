import React, { Component } from 'react';
import { Dimensions, FlatList, StatusBar, View } from 'react-native';
import styled from 'styled-components';
import DogCard from '../components/DogCard';

import { orange, white } from '../../colors';

const { height, width } = Dimensions.get('screen')
const data = [
    {
        image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-card-small.jpg',
        name: 'Shibu Inu'
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dogs-with-blue-eyes-siberian-husky-1576852935.jpg',
        name: 'Siberian Husky'
    },
    {
        image: 'https://thehappypuppysite.com/wp-content/uploads/2017/10/goldie.jpg',
        name: 'Golden Retriever'
    },
    {
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/72160e4/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F29%2Fac3ff0a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-3-645mk062811.jpg',
        name: 'Pomeranian'
    },
];

export default class DogBreeds extends Component {
    navigateToDogSelection(image, name, imageLoaded) {
        if (!imageLoaded) {
            return;
        }

        const { navigation } = this.props;
        navigation.navigate('DogSelection', {
            image,
            name
        })
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
                        const { image, name } = item;
                        return (
                            // add margin-top to first card
                            <DogCard image={image} name={name} first={index === 0}
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
    height: 100%;
    display: flex;
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
    z-index: 1;
    height: ${height * .15}px;
    width: 100%;
    background-color: ${white};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.50);
    elevation: 10;
`

const DogList = styled.FlatList``;