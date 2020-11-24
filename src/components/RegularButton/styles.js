import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    border-radius: 5px;
    background-color: ${props => props.theme.primaryColor};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #FAFAFA;
    text-transform: uppercase;
    font-family: 'NunitoSans_800ExtraBold';
`;