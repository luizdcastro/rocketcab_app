import React from 'react'
import { Container, Title } from './styles'

const LightButton = ({ name, onPress, children }) => {
    return (
        <Container onPress={onPress}>
            <Title>{name}</Title>
            {children}
        </Container>
    )
}
export default LightButton