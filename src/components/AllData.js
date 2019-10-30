import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import { viewAllAction } from '../actions/index';


class ImportData extends Component {
    
    // constructor(){
    //     const publicAccessKey = publicKey.access_token;
    // }
    state = {
        allData : []
    }
    
    viewDefault = () => {

    }
    componentDidMount(){
        // console.log(publicKey)
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(res =>{
            console.log(res.data.sprites);
            // this.setState({allData=res.data});
        });
    }
    
    render(){

        return (<div>Importing data</div>);
    };
}

const mapDispatchToProps = (dispatch) =>{
    // console.log('is dispatch', props);
   return dispatch(viewAllAction());
}

export default connect(
    null,
    mapDispatchToProps,
  )(ImportData);