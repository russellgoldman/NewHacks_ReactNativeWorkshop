import React, { Component } from 'react';
import { Dimensions, FlatList, StatusBar, View } from 'react-native';
import styled from 'styled-components';
import DogCard from '../components/DogCard';

const { height, width } = Dimensions.get('screen')
const data = [
    {
        link: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-card-small.jpg',
        name: 'Shibu Inu'
    },
    {
        link: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dogs-with-blue-eyes-siberian-husky-1576852935.jpg',
        name: 'Siberian Husky'
    },
    {
        link: 'https://thehappypuppysite.com/wp-content/uploads/2017/10/goldie.jpg',
        name: 'Golden Retriever'
    },
    {
        link: 'https://vetstreet.brightspotcdn.com/dims4/default/72160e4/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F29%2Fac3ff0a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-3-645mk062811.jpg',
        name: 'Pomeranian'
    },
];

export default class DogBreedsScreen extends Component {
    render() {
        const { navigation } = this.props;
        StatusBar.setBarStyle('dark-content', true);

        return (
            <Container>
                <ScreenTitleBar>
                    <ScreenTitle>Dog Breeds</ScreenTitle>
                </ScreenTitleBar>
                <DogList
                    data={data}
                    renderItem={({ item, index }) => {
                        const { link, name } = item;
                        return (
                            // add margin-top to first card
                            <DogCard image={link} title={name} first={index === 0} />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.name}
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
    background-color: #fff;
`;

const ScreenTitle = styled.Text`
    font-family: FugazOne-Regular;
    font-size: 36px;
    align-self: flex-start;
    top: ${height * 0.02}px;
    left: ${width * .1}px;
    color: rgba(234, 123, 22, 0.85);
`;

const ScreenTitleBar = styled.View`
    justify-content: center;
    z-index: 1;
    height: ${height * .15}px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.50);
`

const DogList = styled.FlatList`
`;