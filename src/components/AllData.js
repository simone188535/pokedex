import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import _ from 'lodash';
import { Col, Row, Card } from 'react-bootstrap';

// import { viewAllAction } from '../actions/index';
import {
    addItem
    // , allListItems 
} from '../actions/index';


class ImportData extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         loading: true,
    //     }
    // }
    state = {
        loading: true,
    }
    isLoading = () => {
        let loadStatus = '';
        if (this.state.loading) {
            loadStatus = 'Loading...';
        } else {
            loadStatus = 'Done Loading';
        }

        return (<div>{loadStatus}</div>);
    }


    grabAllNamesFromAPI = async () => {
        try {
            //this function grabs all names out of the api and stores them in the allNames array. 
            //this info will later be fed into another api call. 
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50");
            //const allNames = [];
            const allNames = _.map((res.data.results), (value) => {
                return value.name
            });
            this.useNamesToInputDataIntoRedux(allNames);

        } catch (err) {
            throw new Error('Unable to get names from API');
        }

    }
    useNamesToInputDataIntoRedux = async (allNames) => {
        try {

            const promisesArray = _.map(allNames, async (value) => {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
                return res;
            });
            // console.log(promisesArray);
            const valuesArray = await axios.all(promisesArray);
            // console.log(valuesArray); // Should have resolved values

            _.each((valuesArray), (res) => {

                const { name, sprites, types, stats, moves, height, weight } = res.data;
                // console.log(name);

                //extracts front default sprite 
                const sprite = sprites.front_default;

                //extract types
                let allTypes = _.map((types), (value) => {
                    //iterates through types array and puts in to allTypes array
                    return value.type.name;
                });
                // console.log(allTypes);

                //extract stats
                let allStats = _.map((stats), (value) => {
                    let statsData = { name: value.stat.name, base_stat: value.base_stat };
                    //iterates through stat array and puts in to allStats array (there are 6 values for each)
                    return statsData;
                    // console.log(statsData);
                });
                // console.log(allStats);

                //extracts the first 4 moves for each pokemon. 
                let allMoves = [];
                _.each((moves), (value, key) => {
                    //iterates through moves array and puts in to allMoves array
                    allMoves.push(value.move.name);

                    //this stops the array after first 4 moves
                    if (key === 3) {
                        return false;
                    }
                });
                // console.log(allMoves);



                this.props.addItem({ name, sprite, allTypes, allStats, allMoves, height, weight });
            });

            //after putting data into redux, switch loading state to false
            this.setState({
                loading: !this.state.loading
            })


        } catch (err) {
            throw new Error('Unable to insert API data into Redux');
        }

    }
    renderList = () => {

        // only render after loading data into redux
        if (!this.state.loading) {
            let displayList = _.map((this.props.listItems), (value) => {
                const {name,sprite} = value;

                return(
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sprite} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            });
            return displayList;
            // 
        }

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

        return (<div>
            <div>{this.isLoading()}</div>
            <div>
            <Row>
            {this.renderList()}
            </Row></div>
        </div>);
    };
}

const mapDispatchToProps = (dispatch) => ({
    // viewAll: () => dispatch(viewAllAction())
    addItem: (payload) => dispatch(addItem(payload)),
    // allListItems: () => dispatch(allListItems())
});
const mapStateToProps = (state) => {
    // console.log('state',state);
    return { listItems: state.AddItemReducer.listItems };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImportData);