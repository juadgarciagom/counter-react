import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {title, value} ) => {

    const [ counter, setCounter ] = useState(value);


    //handleadd
    const handleAdd = () => {  
        setCounter( counter + 1);
    };

    //handleSubstract
    const handleSubstract = () => {
        if (counter <= 0) {
            return
        } else {
        setCounter( counter - 1 );
        }
    }

    //handleReset
    const handleReset = () => {  
        setCounter( value );
    }

    return (
        <>
            <h1>{ title }</h1>
            <h2>{ counter }</h2>

            <hr />

            <button onClick={ handleAdd }>Addition</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>Substract</button>

        </>
    )
};

CounterApp.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default CounterApp