import styled from 'styled-components/native'

export const Container = styled.View`
    width: 95px;
    height: 70px;
    align-items: center;
    border-radius: 5px;
    margin-right: 10px;
`;

export const CategoryIcon = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor};
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

export const Title = styled.Text`
    font-family: 'NunitoSans_400Regular';
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
`;