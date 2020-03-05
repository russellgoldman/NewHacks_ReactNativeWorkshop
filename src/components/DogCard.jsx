import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components';

const { height, width } = Dimensions.get('screen')
import { orange, white } from '../../colors';

// percentage of full screen width
let CardWidth = .80

export default class DogCard extends Component {
    state = {
        imageLoaded: false
    };

    _onLoad = () => {
        this.setState(() => ({ imageLoaded: true }))
    }

    render() {
        const { image, name, description, first, onPress } = this.props;
        const { imageLoaded } = this.state;

        return(
            <CardContainer first={first} onPress={() => onPress(image, name, description, imageLoaded)} imageLoaded={imageLoaded}>
                <DogImage source={{ uri: image }} onLoad={this._onLoad} hideWhileLoading={imageLoaded} />
                {!imageLoaded ? (
                    <LoadingActivityIndicator size="large" color={orange} />
                ) : (
                    <DogTextContainer>
                        <DogText>{name}</DogText>
                    </DogTextContainer>
                )}
            </CardContainer>
        );
    } 
};

const CardContainer = styled.TouchableOpacity`
    margin-top: ${props => props.first ? 25 : 0}px;
    margin-bottom: 25px;
    margin-left: ${width * ((1 - CardWidth) / 2)}px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    elevation: ${props => props.imageLoaded ? 4 : 0};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const DogImage = styled.Image`
    height: ${props => props.hideWhileLoading ? height * .175 : (Platform.OS === 'android' ? 0 : 1)}px;
    width: ${width * CardWidth}px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const DogTextContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: ${width * .80}px;
    background-color: ${white};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const DogText = styled.Text`
    font-family: Futura-Medium;
    font-size: 20px;
    color: ${orange};
`;

const LoadingActivityIndicator = styled.ActivityIndicator`
    height: ${height * .175 + 50}px;
`;