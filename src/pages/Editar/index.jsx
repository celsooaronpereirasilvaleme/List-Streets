import  React, { useState, useEffect } from 'react';
import api from '../../services/api'
import {useNavigate,  useParams} from 'react-router-dom'
import styles from './styles.module.css'


const initialValue = {

    title: '',
    image: '',
    price: 0,
    url: '',
};  


function Editar(){

  const [values, setValues] = useState(initialValue);

  const navigate = useNavigate();

  const { id } = useParams();

  const url = `/lukes/${id}`;


  useEffect( () =>{
    if (id){
        api.get(url)
            .then( (response) => {
                setValues(response.data)
            })
    }
},[])
   


  function onSubmit(evento){
    evento.preventDefault(); 

    

    api.put(url, values)
    .then (() => {
        navigate('/administrar');
    })

  }
  function onChange(ev){
    const {name, value } = ev.target 
    //console.log({name, value});

    setValues({ ...values, [name]:value})
    //console.log(values);
    
  }

    return(
        <>
        <div className={styles.div}>
            <h1>Editar</h1>
        <form onSubmit={onSubmit}>
            <div className={styles.booksFormGroup}>
                <label htmlFor="title">Titulo</label>
                <input type="text"  id='title' name='title' value={values.title} onChange={onChange}/>

            </div>
            <div className={styles.booksFormGroup}>
                <label htmlFor="image">image</label>
                <input type="text"  id='image' name='image' value={values.image} onChange={onChange}/>

            </div>
            <div className={styles.booksFormGroup}>
                <label htmlFor="price">price</label>
                <input type="text"  id='price' name='title' value={values.price} onChange={onChange}/>

            </div>
            <div className={styles.booksFormGroup}>
                <label htmlFor="url">url</label>
                <input type="text"  id='url' name='url' value={values.url} onChange={onChange}/>

            </div>

        </form>
            <button type='submit'>Salvar</button>
        </div>
        </>
    )
}

export default Editar;