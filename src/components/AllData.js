import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";

// import { viewAllAction } from '../actions/index';
import { addItem } from '../actions/index';


class ImportData extends Component {
    
    // state = {
    //     allData : []
    // }

    componentDidMount(){
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(res =>{
            const { sprites, species, height, weight } = res.data;
            // console.log(res.data);
            // console.log( sprites.front_default);
            // let sprites= sprites.front_default;
            // console.log(species);
            // console.log(height);
            // console.log(weight);
            // this.setState({allData=res.data});
            this.props.addItem({sprites, species, height, weight});
        });
        // this.props.viewAll();
    }
    
    render(){

        return (<div>Importing data</div>);
    };
}

const mapDispatchToProps = (dispatch) =>({
    // viewAll: () => dispatch(viewAllAction())
    addItem: (payload) => dispatch(addItem(payload))
});

export default connect(
    null,
    mapDispatchToProps,
  )(ImportData);