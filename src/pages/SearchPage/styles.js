import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #fafafa;
    padding-top: 10px
`;

export const SearchBar = styled.View`
    position: relative;
    margin: 30px 10px 15px 10px;
`;

export const FilterContainer = styled.View`
    flex-direction: row;
    width: ${props => props.width + 'px'};
    justify-content: center;
    margin-left: 10px
`;

export const FilterMenu = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;   
    height: 25px;
`;

export const FilterMenuMiddle = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;   
    margin-left: 30px;
    margin-right: 30px;
    height: 25px;
`;

export const TitleMenu = styled.Text`
    font-family: 'NunitoSans_600SemiBold';
    color: grey;
`;

export const TitleMenuActive = styled.Text`
    font-family: 'NunitoSans_600SemiBold';
    color: #523BE4;
`;

export const SeparatorMenu = styled.Text`
    font-family: 'NunitoSans_200ExtraLight';
    color: grey;
    margin-left: 20px
`;


