import  React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// import {getLukes} from './../api/luke'
import { Link } from 'react-router-dom';
import api from './../../services/api';
import styles from './styles.module.css';

import ListaLukesAdm from './../../components/ListLukesAdm';


const Block = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 15px;
text-align:center;
color: #837d7d;
`
const ListContainer = styled.div`
  
  position: relative;
  left: 500px;
  width: 300px;
  border-radius: 15px;
  /* background-color: #c0b8b8; */
  padding: 10px;
`;






function ListaAdministrar (){
  const [lukes, setLukes] = useState([]);
  const [search, setSearch] = useState('');

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
          <h1>List Lukes</h1>
          <input 
          className={styles.listaSearchInput}
          type="search" 
          placeholder='Buscar Roupas Streets'
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <button>
        
        <Link to={`/administrar/cadastrar/`}>
        Cadastrar +</Link></button>
          <ListContainer>
          {lukes.map(lukes => {
                  return ( <ListaLukesAdm
                  key={lukes.id}  
                  lukes={lukes}
                  /> )
                })
                }
          </ListContainer>
      </Block>
    </>
  )
}

export default ListaAdministrar;