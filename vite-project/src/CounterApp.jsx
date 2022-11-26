import { useState } from "react";
import PropTypes from 'prop-types';


export const CounterApp = ( { counter } ) => {

    const [ value, setCounter] = useState( 0 )
    
    const masUno = ( e ) => {
        setCounter(( c ) => c + 1 )
    }

    const menosUno = ( e ) => {
        setCounter(( c ) => c - 1 )
    }

    const reset = ( e ) => {
        setCounter(( c ) => c = counter)
    }

    return (
        <>
            <h1>CouterApp</h1>
            <h2> { value } </h2>

            <button onClick={ masUno }>
                +1
            </button>

            <button onClick={ menosUno }>
                -1
            </button>

            <button onClick={ reset }>
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    counter: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    counter: 'El contador no esta anidado'
}