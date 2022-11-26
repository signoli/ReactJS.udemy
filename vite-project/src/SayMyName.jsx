import PropTypes from 'prop-types';

//funcion saludar
const getDespedir = () => {
    return (
        <p>Chau a todos!</p>
    )
}

//objeto para usar JSON Stringify
const newStr = {
    name: 'Ricardo',
    age: 27,
}

//Componente
export const SayMyName = ( { title, subTitle } ) => {

    return (
        <>
            <h1> { title} </h1>
            <p> { subTitle } </p>
            
            {/* <p>Multiplicacion de 12 x 6: { number * 6 }</p>
                <p>Objeto: <code>{ JSON.stringify( newStr ) }</code></p>
                { getDespedir() }  */}
            
        </>
    )
}

SayMyName.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

SayMyName.defaultProps = {
    title: 'No hay Titulo',
    subTitle: 'No hay subtitulo'
}





//CounterApp
import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ counter }) => {

    const [ value, setCounter ] = useState( counter )

    
    const masUno = (e) => {
        setCounter( (c) => c + 1)
    }


    return (
    <>
        <h1> Counter App </h1>
        <h2> { value } </h2>

        <button onClick={ masUno }>
            +1
        </button>
    </>
    )
}

CounterApp.propTypes = {
    counter: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    counter: 'No se recibio ningun numero',
}