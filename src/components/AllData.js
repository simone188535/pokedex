import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import _ from 'lodash';

// import { viewAllAction } from '../actions/index';
import { addItem
    // , allListItems 
} from '../actions/index';


class ImportData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allNames: []
        }
    }
    // state = {
    //     allData : []
    // }
    grabAllNames = async () => {
        try {
            //this function grabs all names out of the api and stores them in the allNames array. 
            //this info will later be fed into another api call. 
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=5");
            await _.each((res.data.results), (value) => {

                 this.state.allNames.push(value.name);

            });
            // console.log(this.state.allNames);
            await _.each((this.state.allNames), async (value) => {
                const individualRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
                
                console.log(individualRes.data);
                const { name, sprites, types, stats, moves, height, weight } = individualRes.data;
                const spritesFD = sprites.front_default;

                // this.props.addItem({name, spritesFD, types, stats, moves, height, weight});
            });

        } catch (err) {
            throw new Error('Unable to connect to API');
        }
        // console.log(this.state.allNames);


    }
    componentDidMount() {
        // axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(res =>{
        //     const { sprites, species, height, weight } = res.data;
        //     // console.log(res.data);
        //     this.props.addItem({sprites, species, height, weight});
        // });
        // axios.get("https://pokeapi.co/api/v2/pokemon/ditto/")
        // this.props.allListItems();
        // this.props.viewAll();
        // console.log(this.props.searchValue);
        this.grabAllNames();

    }
    componentDidUpdate() {
        console.log(this.props.searchValue);
        this.props.filterSearch(this.props.searchValue);
    }

    render() {

        return (<div>Importing data</div>);
    };
}

const mapDispatchToProps = (dispatch) => ({
    // viewAll: () => dispatch(viewAllAction())
    addItem: (payload) => dispatch(addItem(payload)),
    // allListItems: () => dispatch(allListItems())
});

export default connect(
    null,
    mapDispatchToProps,
)(ImportData);