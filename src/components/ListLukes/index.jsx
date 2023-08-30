import React from 'react'
import styled from 'styled-components'

const Imagem = styled.img`
    width: 204px;
    height: 250px;
    padding: 15px;
    border-radius: 25px;
    
`
const ItemLink = styled.a`
`
const ItemContainer = styled.div`

`
const Title = styled.div`
font-size: 12px;
color: #0b0b0b;
text-align: center;
`
const Price = styled.div`
color: #131212;
font-size: 9px;
text-align: center;
`

const Button = styled.div`
font-size: 9px;
margin-left: 100px;
margin-top: 5px;
border-radius: 2px;
text-align: center;
width: 50px;
left: 100px;
padding: 2px;
color: #ffffff;
background-color: black;


`

export default function ListLukes({Lukes}){
    return(
        <>
        <ItemLink href={Lukes.url} target='_blank'>
            <ItemContainer>
                <Imagem src={Lukes.image}/>
            <Title>{Lukes.title}</Title>
            <Price>{Lukes.price}</Price>
            <Button>Comprar</Button>
        </ItemContainer>
      </ItemLink>
        
        </>
    )
}