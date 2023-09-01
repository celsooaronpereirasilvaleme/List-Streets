import React, {useState} from 'react';
import api from '../../services/api'
import {useNavigate} from 'react-router-dom'
import styles from './styles.module.css'


const initalValue = {

    title: '',
    image: '',
    price: 0,
    url: '',
};  


function Cadastrar(){

  const [values, setValues] = useState(initalValue);

  const navigate = useNavigate();

  function onSubmit(ev){
    ev.preventDefault(); 

    const url = '/lukes';

    api.post(url, values)
    .then (() => {
        navigate('/');
    })

  }
  function onChange(ev){
    const {name, value} = ev.target 
    console.log({name, value});

    setValues({ ...values, [name]: value})
    console.log(values);
    
  }

    return(
        <>
        
        <h1>Cadastrar</h1>
        <form onSubmit={onSubmit}>
            <div className={styles.booksFormGroup}>
                <label htmlFor="title">Titulo</label>
                <input type="text"  id='title' name='title' onChange={onChange}/>

            </div>
            <div className={styles.booksFormGroup}>
                <label htmlFor="image">image</label>
                <input type="text"  id='image' name='image' onChange={onChange}/>

            </div>
            <div className={styles.booksFormGroup}>
                <label htmlFor="price">price</label>
                <input type="text"  id='price' name='title' onChange={onChange}/>

            </div>
            <div className={styles.booksFormGroup}>
                <label htmlFor="url">url</label>
                <input type="text"  id='url' name='url' onChange={onChange}/>

            </div>
            <button type='submit'>Salvar</button>

        </form>
        
        </>
    )
}

export default Cadastrar;