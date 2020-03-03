import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const { height, width } = Dimensions.get('screen')
let CardWidth = .80

export default DogCard = ({ image, title, first }) => {
    return (
        <CardContainer first={first}>
            <DogImage source={{ uri: image }} />
            <DogTextContainer>
                <DogText>{title}</DogText>
            </DogTextContainer>
        </CardContainer>
    );
};

const CardContainer = styled.TouchableOpacity`
    margin-top: ${props => props.first ? 30 : 0}px;
    margin-bottom: 30px;
    margin-left: ${width * ((1 - CardWidth) / 2)}px
`;

const DogImage = styled.Image`
    height: ${height * .175}px;
    width: ${width * CardWidth}px;
    resize-mode: stretch;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const DogTextContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: ${width * .80}px;
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