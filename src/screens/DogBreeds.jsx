import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import DogCard from '../components/DogCard';

import data from '../../assets/DogBreedsData';
import { orange, white } from '../../colors';

const { height, width } = Dimensions.get('screen')

// All Class Components must extend Component
export default class DogBreeds extends Component {
    // Best practice when defining private methods is with an underscore
    _navigateToDogSelection(image, name, description, imageLoaded) {
        /* If the user attempts to navigate to the DogSelection screen before the DogCard image has loaded,
        cancel the navigation request */
        if (!imageLoaded) {
            return;
        }

        // All components included as navigation screens are passed a `navigation` prop
        const { navigation } = this.props;
        // We wish to navigate to the modal component 'DogSelection' in RootStack (see App.js)
        navigation.navigate('DogSelection', {
            // Note: we do not have to denote (key: value) because the key and value are the same in this case
            image,
            name,
            description
        });
    }

    // React Native looks here to determine what should be shown visually from the Component
    render() {
        // All JSX is included in this function
        return (
            <Container>
                <ScreenTitleBar>
                    <ScreenTitle>Dog Breeds</ScreenTitle>
                </ScreenTitleBar>
                <DogList
                    /* The data prop provides an input source to the renderItem prop. The source must be an
                    array of values (e.g. strings, objects, etc) */
                    data={data}
                    renderItem={({ item, index }) => {
                        // Object destructing values from the `item` object into unique constants named `image`, `name` and `description`
                        const { image, name, description } = item;
                        return (
                            // Add a margin-top only if the renderedItem contains the first DogCard
                            <DogCard image={image} name={name} description={description} first={index === 0}
                                onPress={this._navigateToDogSelection.bind(this)} />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.name}
                />
            </Container>
        );
    }
}

// All styled-component definitions
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