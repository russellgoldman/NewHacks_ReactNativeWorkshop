import React, { Component } from 'react';
import styled from 'styled-components';
import { Dimensions, View } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default class DogSelection extends Component {
    render() {
        const { route, navigation } = this.props;
        const { image, name } = route.params;

        return (
            <View style={{ backgroundColor: '#fff' }}>
                <Container>
                    <DogImage source={{ uri: image }} />
                </Container>
            </View>
        );
    }
}

const Container = styled.SafeAreaView`
    background-color: #fff;
`;

const DogImage = styled.Image`
    height: ${height * .3}px;
    width: ${width}px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;