import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default DogCard = ({ image, title, leftShift }) => {
    return (
        <CardContainer leftShift={leftShift}>
            <DogImage source={{ uri: image }} />
            <DogTextContainer>
                <DogText>{title}</DogText>
            </DogTextContainer>
        </CardContainer>
    );
};

const CardContainer = styled.TouchableOpacity`
    height: 20%;
    width: 80%;
    left: ${props => props.leftShift}%;
`;

const DogImage = styled.Image`
    height: 100%;
    width: 100%;
    resize-mode: stretch;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const DogTextContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #fff;
    color: #000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const DogText = styled.Text`
    font-family: Futura-Medium;
    font-size: 20px;
    color: rgba(234, 123, 22, 0.85);
`;