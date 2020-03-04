import React, { Component } from 'react';
import styled from 'styled-components';
import { Dimensions, Platform, StatusBar, View } from 'react-native';

const { height, width } = Dimensions.get('screen');
import { orange, white } from '../../colors';

export default class DogSelection extends Component {
    state = {
        imageLoaded: false
    };

    _onLoad = () => {
        this.setState(() => ({ imageLoaded: true }))
    }

    render() {
        const { route, navigation } = this.props;
        const { image, name } = route.params;
        const { imageLoaded } = this.state;

        return (
            <Container imageLoaded={imageLoaded}>
                <DogImage source={{ uri: image }} onLoad={this._onLoad} hideWhileLoading={imageLoaded} />
                {!imageLoaded && (
                    <LoadingActivityIndicator size="large" color={orange} />
                )}
            </Container>
        );
    }
}



const Container = styled.SafeAreaView`
    height: ${height};
    top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    background-color: ${white};
    elevation: ${props => props.imageLoaded ? 4 : 0};
`;

const DogImage = styled.Image`
    height: ${props => props.hideWhileLoading ? height * .3 : (Platform.OS === 'android' ? 0 : 1)}px;
    width: ${width}px;
    ${Platform.OS === 'ios' && (`
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    `)}
`;

const LoadingActivityIndicator = styled.ActivityIndicator`
    height: ${height * .175 + 50}px;
`;