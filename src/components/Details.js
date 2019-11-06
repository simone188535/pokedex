import React, { Component } from 'react';
// import { Navbar, InputGroup, FormControl } from 'react-bootstrap';

const Details = ({match}) => {

    const testing = () => {
        console.log(match.params.name);
    }

   
        return (
            <div>
                <h1>Hello!</h1>
                <div>{testing()}</div>
            </div>

        );
   
}

export default Details;