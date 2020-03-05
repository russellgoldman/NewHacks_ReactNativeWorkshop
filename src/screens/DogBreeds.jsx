import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import DogCard from '../components/DogCard';

import { orange, white } from '../../colors';

const { height, width } = Dimensions.get('screen')
const data = [
    {
        image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-card-small.jpg',
        name: 'Shiba Inu',
        description: `The Shiba Inu is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dogs-with-blue-eyes-siberian-husky-1576852935.jpg',
        name: 'Siberian Husky',
        description: `The Siberian Husky is a medium-sized working dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than a very similar-looking dog, the Alaskan Malamute.`
    },
    {
        image: 'https://thehappypuppysite.com/wp-content/uploads/2017/10/goldie.jpg',
        name: 'Golden Retriever',
        description: `The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth.`
    },
    {
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/72160e4/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F29%2Fac3ff0a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-3-645mk062811.jpg',
        name: 'Pomeranian',
        description: `The Pomeranian is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz.`
    }
];

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
    z-index: 3;
    height: ${height * .15}px;
    width: 100%;
    background-color: ${white};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.50);
    elevation: 10;
`

const DogList = styled.FlatList``;