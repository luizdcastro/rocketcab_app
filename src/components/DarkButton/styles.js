import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    border-radius: 5px;
    background-color: #FAFAFA;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    font-family: 'NunitoSans_800ExtraBold';
`;