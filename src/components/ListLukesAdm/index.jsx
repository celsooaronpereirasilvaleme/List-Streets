import  React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import api from '../../services/api';


const Imagem = styled.img`
    width: 225px;
    height: 250px;
    position: relative;
    padding: 15px;
    border-radius: 25px;
    box-shadow:  16px -25px teal;
    border: 2px solid #837d7d;
    
`
const ItemLink = styled.a`

`
const ItemContainer = styled.div`

`
const Title = styled.div`
font-size: 15px;
color: #0b0b0b;
left:300px;
top: -247px;
position: relative;

`
const Price = styled.div`
color: #131212;
font-size: 9px;
left: 300px;
top: -240px;
position: relative;
`


const Button = styled.div`
font-size: 10px;
top: -300px;
color: white;
position: relative;
left: 600px;
margin-top: 15px;
border-radius: 7px;
text-decoration: none;
text-align: center;
background-color: #acacaf;
width: 45px;
height: 25px;
padding: 1px;

`



const Panel = styled.div`
position: relative;
`


export default function ListLukesAdm ({lukes}) {
    const [loading, setLoading] = useState(true);
  
    function onDelete(id){
        setLoading(false);
  
        const url = `/lukes/${id}`;
        api.delete(url)
          .then ( (response) => {});
    }
  
    return (
      <>
        {!loading
          ? (
              <div>Deletado...</div>
            )
            :
            (
              <ItemContainer>
                {/* <Panel> */}
                  <p>{lukes.id}</p>
                  <Imagem src={lukes.image} />
                  <Title>{lukes.title}</Title>
                  <Price>{lukes.price}</Price>
                {/* </Panel> */}
                  <div>
                    <Button>
                      <Link to={`/administrar/editar/${lukes.id}`}>
                        Editar
                      </Link>
                    </Button>
                    <Button 
                      // onClick={ () => console.log(`Deleted ${books.id}`)}
                      onClick={ () => onDelete(lukes.id)}
                    >
                      Deletar
                    </Button>
  
                  </div>
              </ItemContainer>
            )  
        }      
      </>
    )
  }
  