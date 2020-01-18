import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import _ from 'lodash';
import { Container, Col, Row, Card } from 'react-bootstrap';

import { addItem } from '../actions/index';


class ImportData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    isLoading = () => {

        let loadStatus = '';

        if (this.state.loading) {
            loadStatus = <div id="loading">Loading...</div>;
        } else {
            loadStatus = '';
        }

        return (<div className="text-center">{loadStatus}</div>);
    }

    //this function grabs all names out of the api and stores them in the allNames array. 
    grabAllNamesFromAPI = async () => {
        try {
            //this info will later be fed into another api call. 
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150");

            const allNames = _.map((res.data.results), (value) => {
                return value.name
            });

            this.useNamesToInputDataIntoRedux(allNames);

        } catch (err) {
            throw new Error('Unable to get names from API');
        }

    }

    //this function parses the data using the names from the grabAllNamesFromAPI function and extracts into a simplified form. It then
    //uploads it to redux using axios.
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

            const { listItems, searchValue } = this.props;

            let filteredList = listItems.filter((item) => item.name.includes(searchValue));

            let displayList = _.map((filteredList), (value, key) => {


                const { name, sprite, allTypes, allStats, allMoves, height, weight } = value;

                const everyType = _.map((allTypes), (value) => value).join(', ');

                const everyStats = _.map((allStats), (value, i) => {
                    return <div key={i}> {value.name} : {value.base_stat} </div>;

                });
                const everyMoves = _.map((allMoves), (value) => value).join(', ');


                return (
                    <Col key={key} md={4}>

                        <Card className="my-5">
                            <Card.Img variant="top" src={sprite} />
                            <Card.Body>
                                <Card.Title className="text-center">{name}</Card.Title>
                                <div className="details">
                                    <div className="sub-title">Types:</div>
                                    <div className="sub-content">{everyType}</div>
                                    <div className="sub-title">Stats:</div>
                                    <div className="sub-content">{everyStats}</div>
                                    <div className="sub-title">Moves:</div>
                                    <div className="sub-content">{everyMoves}</div>
                                    <div className="sub-title">Height:</div>
                                    <div className="sub-content">{height}</div>
                                    <div className="sub-title">Weight:</div>
                                    <div className="sub-content">{weight}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            });
            return displayList;
        }

    }

    componentDidMount() {
        this.grabAllNamesFromAPI();
    }



    render() {

        return (
            <div className="main-content">
                <div className="isLoading">
                    {this.isLoading()}
                </div>
                <div >
                    <Container className="card-container">
                        <Row>
                            {this.renderList()}
                        </Row>
                    </Container>
                </div>
            </div>);
    };
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (payload) => dispatch(addItem(payload))
});
const mapStateToProps = (state) => {
    // console.log('state',state);
    return { listItems: state.DisplayListReducer.listItems };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImportData);