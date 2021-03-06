import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #fafafa
`;

export const Title = styled.Text`
    font-family: 'NunitoSans_600SemiBold';
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px
`;

export const CarouselCard = styled.TouchableOpacity`
    flex: 1;
    height: 160px;
    width: ${props => props.width + 'px'};
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5px;    
`;

export const ImageCarousel = styled.Image`
    width: ${props => props.width + 'px'};
    height: 160px;
    border-radius: 5px;
`;

export const HeaderLeft = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    background-color: #fafafa;
    padding: 5px;
    border-radius: 30px;
`;

export const HeaderTitle = styled.Text`
    font-family: 'NunitoSans_700Bold';
    font-size: 15px;
    padding-left: 5px;
    color: grey
`;



