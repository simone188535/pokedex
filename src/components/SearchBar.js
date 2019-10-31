import React, {Component} from 'react';
import { Navbar, InputGroup, FormControl, Button } from 'react-bootstrap';

class SearchBar extends Component {


    state = {
        searchValue: ''
    }

    onChangeHandler =  e => {

        this.setState({ value: e.target.searchValue });
        
        console.log(this.searchValue);

    }
    render() {
        return (
            <Navbar className="search-bar-container mx-auto">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Pokemon"
                        aria-label="Search Pokemon"
                        aria-describedby="basic-addon2"
                        value={this.state.searchValue}
                        onChange={e => this.onChangeHandler(e)}
                    />
                    {/* <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append> */}
                </InputGroup>
            </Navbar>

        );
    }
}

export default SearchBar;