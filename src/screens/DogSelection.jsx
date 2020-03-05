import React, { Component } from 'react';
import styled from 'styled-components';
import { Dimensions, Platform, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('screen');
import { orange, white, grey } from '../../colors';

const small = 0;
const medium = 1;
const large = 2;

export default class DogSelection extends Component {
    state = {
        imageLoaded: false,
        deviceClass: small
    };

    _onLoad = () => {
        this.setState(() => ({ imageLoaded: true }))
    }

    componentDidMount() {
        if (height < 667) {
            // iPhone, iPhone 4, iPhone 5 / 5s
            this.setState({ deviceClass: small });
        } else if (height < 1024) {
            // iPhone 6 / 6 plus
            this.setState({ deviceClass: medium });
        } else {
            // iPad 1, iPad 2, iPad 3
            this.setState({ deviceClass: large });
        }
    }

    render() {
        const { route, navigation } = this.props;
        const { image, name, description } = route.params;
        const { imageLoaded, deviceClass } = this.state;

        return (
            <Container imageLoaded={imageLoaded}>
                <DogImage source={{ uri: image }} onLoad={this._onLoad} hideWhileLoading={imageLoaded} />
                {!imageLoaded && (
                    <LoadingActivityIndicator size="large" color={orange} />
                )}
                <SelectedDogTextInfo>
                    <SelectedDogTitle deviceClass={deviceClass}>{name}</SelectedDogTitle>
                    <SelectedDogDescription deviceClass={deviceClass}>{description}</SelectedDogDescription>
                </SelectedDogTextInfo>
            </Container>
        );
    }
}

const Container = styled.SafeAreaView`
    height: ${height}px;
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
    height: ${height * .3}px;
`;

const SelectedDogTextInfo = styled.ScrollView`
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 15px;
`;

const SelectedDogTitle = styled.Text`
    margin-top: 15px;
    font-family: FugazOne-Regular;
    font-size: ${props => props.deviceClass === small ? 32 : props.deviceClass === medium ? 36 : 48}px;
    color: ${orange};
`;

const SelectedDogDescription = styled.Text`
    margin-top: 10px;
    font-family: Futura-Medium;
    font-size: ${props => props.deviceClass === small ? 15 : props.deviceClass === medium ? 18 : 24}px;
    color: ${grey};
    line-height: 28px;
    text-align: justify;
`;