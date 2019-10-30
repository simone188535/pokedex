import React from 'react';
import { Navbar, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <Navbar className="search-bar-container mx-auto">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search Pokemon"
                    aria-label="Search Pokemon"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </Navbar>

    );
}

export default SearchBar;