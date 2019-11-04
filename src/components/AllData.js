import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import _ from 'lodash';

// import { viewAllAction } from '../actions/index';
import {
    addItem
    // , allListItems 
} from '../actions/index';


class ImportData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            promisesArray: []
        }
    }
    state = {
        allData : []
    }
    grabAllNamesFromAPI = async () => {
        try {
            //this function grabs all names out of the api and stores them in the allNames array. 
            //this info will later be fed into another api call. 
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=4");
            const allNames = []
            _.each((res.data.results), (value) => {

                allNames.push(value.name);

            });
            this.useNamesToInputDataIntoRedux(allNames);

        } catch (err) {
            throw new Error('Unable to get names from API');
        }

    }
    useNamesToInputDataIntoRedux =  async (allNames) => {
        try {
            
            const promisesArray = _.map(allNames, async (value) => {
                const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
                return res.data;
            });
            // console.log(promisesArray);
            const valuesArray = await axios.all(promisesArray);
            console.log(valuesArray); // Should have resolved values
            
            //    let axiosRes = axios.all(promisesArray);
            //    console.log(axiosRes);
            // await Promise.all([ promisesArray]).then((res) => {
            //     console.log(res);
            //   });
           
              
            // let test = [1,2,3];
            // console.log(test);
            // _.each((test), (value) => {
            //     console.log(value);
            // });
            
            
            
            // _.map((allNames), async (value) => {
            //     const individualRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);

            //     // return console.log('test1');
            //     // this shows all the data from individual responses. Use this to show all data
            //     // console.log(individualRes.data);

            //     const { name, sprites, types, stats, moves, height, weight } = individualRes.data;

            //     //extracts front default sprite 
            //     const sprite = sprites.front_default;

            //     //extract types
            //     let allTypes = [];
            //     _.each((types), (value) => {
            //         //iterates through types array and puts in to allTypes array
            //         allTypes.push(value.type.name);
            //     });
            //     // console.log(allTypes);

            //     //extract stats
            //     let allStats = [];
            //     _.each((stats), (value) => {
            //         let statsData = { name: value.stat.name, base_stat: value.base_stat };
            //         //iterates through stat array and puts in to allStats array (there are 6 values for each)
            //         allStats.push(statsData);
            //         // console.log(statsData);
            //     });
            //     // console.log(allStats);

            //     //extracts the first 4 moves for each pokemon. 
            //     let allMoves = [];
            //     _.each((moves), (value, key) => {
            //         //iterates through moves array and puts in to allMoves array
            //         allMoves.push(value.move.name);

            //         //this stops the array after first 4 moves
            //         if (key === 3) {
            //             return false;
            //         }
            //     });
            //     // console.log(allMoves);


            //     console.log(this.props.addItem({ name, sprite, allTypes, allStats, allMoves, height, weight }));

            // });

            // //render list after data is loaded
            // this.renderList();
            
        } catch (err) {
            throw new Error('Unable to insert API data into Redux');
        }

    }
    renderList = () => {
        console.log(this.props.listItems);
    }
    componentDidMount() {
        // this.props.allListItems();
        // this.props.viewAll();
        // console.log(this.props.searchValue);
        
        this.grabAllNamesFromAPI();
        // Promise.all([this.grabAllNamesFromAPI()]).then(() => {
        //     console.log('test1');
        //   });

        // console.log(this.props.searchValue);
        // 

    }
    componentDidUpdate() {
        // this.renderList();
        // console.log(this.props.searchValue);
        // this.props.filterSearch(this.props.searchValue);
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
const mapStateToProps = (state) => {
    // console.log('state',state);
    return { listItems: state.AddItemReducer };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImportData);