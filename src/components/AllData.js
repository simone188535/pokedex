import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import _ from 'lodash';

// import { viewAllAction } from '../actions/index';
import { addItem
    // , allListItems 
} from '../actions/index';


class ImportData extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         allNames: []
    //     }
    // }
    // state = {
    //     allData : []
    // }
    grabAllNames = async () => {
        try {
            //this function grabs all names out of the api and stores them in the allNames array. 
            //this info will later be fed into another api call. 
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=5");
            const allNames = []
            await _.each((res.data.results), (value) => {
                
                allNames.push(value.name);

            });
            // console.log(allNames);
            // console.log(this.state.allNames);
            await _.each((allNames), async (value) => {
                const individualRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
                
                console.log(individualRes.data);
                const { name, sprites, types, stats, moves, height, weight } = individualRes.data;
                
                //extracts front default sprite 
                const sprite = sprites.front_default;
                
                //extract types
                let allTypes = [];
                 _.each((types), (value) =>{
                    //iterates through types array and puts in to allTypes array
                     allTypes.push(value.type.name);
                });
                // console.log(allTypes);

                //extract stats
                let allStats = [];
                _.each((stats), (value) =>{
                    let statsData={name: value.stat.name, base_stat: value.base_stat};
                    //iterates through stat array and puts in to allStats array (there are 6 values for each)
                    allStats.push(statsData);
                    // console.log(statsData);
                });
                // console.log(allStats);

                //extracts the first 4 moves for each pokemon. 
                let allMoves = [];
                _.each((moves), (value, key) =>{
                    //iterates through moves array and puts in to allMoves array
                    allMoves.push(value.move.name);
                    
                    //this stops the array after first 4 moves
                    if(key===3){
                        return false;
                    }
                });
                // console.log(allMoves);


                // this.props.addItem({name, sprite, allTypes, allStats, allMoves, height, weight});
            });

        } catch (err) {
            throw new Error('Unable to connect to API');
        }
        // console.log(this.state.allNames);


    }
    componentDidMount() {
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