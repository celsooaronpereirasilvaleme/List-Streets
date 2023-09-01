import  React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ListLukes from './../../components/ListLukes'
// import {getLukes} from './../api/luke'
import api from './../../services/api';
import styles from './styles.module.css';

const Block = styled.h1`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 15px;
text-align:center;
color: #ada4a4;
`
const ListContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-top: 15px;
  padding-left: 15px;
  left: 530px;
  border-radius: 8px;
  justify-content: center;
  /* background-color: #bcbbbb; */
  padding: 15px;

`;


function ListaLukes (){
  const [lukes, setLukes] = useState ([]);
  const[search, setSearch] = useState('');

  useEffect(() => {
    const url = '/lukes';
    const params = {};
    if (search) {
      params.title_like = search

      api.get('/lukes?_embed=lukes', {params})
        .then( (response) => {
          // console.log(response)
          setLukes(response.data)
        })

    } else {
      
      api.get(url) // all
      .then( (response) => {
        // console.log(response)
        setLukes(response.data)
      })

    }
    
  
  },[search] )




  

  return (
    <>
      <Block>
          <h1>Roupas Streets</h1>
          <input 
          className={styles.listaSearchInput}
          type="search" 
          placeholder='Buscar Roupas Streets'
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
          <ListContainer>
          {lukes.map(luke => {
                  return ( <ListLukes
                  key={luke.id}  
                  Lukes={luke}
                  /> )
                })
                }
          </ListContainer>
      </Block>
    </>
  )
}

export default ListaLukes;