// FC = Functional components
import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( props ) => {

    const { title, sub_title } = props;


    return (
        <>
            <h1>{ title }</h1>
            <h2>{ sub_title }</h2>
        </>
    )
};

FirstApp.propTypes = {
    title: PropTypes.string,
    sub_title: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
    title: 'Hola Juan Nieves',
    sub_title: 'Como estas'
};

export default FirstApp;