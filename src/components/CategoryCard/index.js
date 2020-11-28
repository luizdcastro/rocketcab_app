import React from 'react'
import { Container, CategoryIcon, Title } from './styles'

const CategoryCard = ({ title, backgroundColor, children, style }) => {
    return (
        <Container style={style}>
            <CategoryIcon backgroundColor={backgroundColor}>
                {children}
            </CategoryIcon>
            <Title>{title}</Title>
        </Container>
    )
}

export default CategoryCard