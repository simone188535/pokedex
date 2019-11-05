import React, { Component } from 'react';
import { Navbar, InputGroup, FormControl} from 'react-bootstrap';
import AllData from './AllData';

class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            searchValue:''
        }
    }
    onChangeHandler = e => {

        this.setState({ value: e.target.value });
        e.preventDefault();
        // console.log(this.state.value);
    }
    // passSearchValue = () =>{
    //     // console.log('working')
    //     this.setState({ searchValue: this.state.value});
    // }
    render() {
        return (
            <div>
            <Navbar className="search-bar-container mx-auto">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Pokemon"
                        aria-label="Search Pokemon"
                        aria-describedby="basic-addon2"
                        value={this.state.value}
                        onChange={(e)=> this.onChangeHandler(e)}
                    />
                    {/* <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={()=> this.passSearchValue()}>Search</Button>
                </InputGroup.Append> */}
                </InputGroup>
            </Navbar>
            <AllData searchValue={this.state.value}/>
            </div>

        );
    }
}

export default SearchBar;