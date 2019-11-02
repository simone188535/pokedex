import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";

// import { viewAllAction } from '../actions/index';
import { addItem,filterSearch } from '../actions/index';


class ImportData extends Component {
    
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         test: props.searchValue
    //     }
    // }
    // state = {
    //     allData : []
    // }

    componentDidMount(){
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(res =>{
            const { sprites, species, height, weight } = res.data;
            // console.log(res.data);
            this.props.addItem({sprites, species, height, weight});
        });
        // this.props.viewAll();
        // console.log(this.props.searchValue);
    }
    componentDidUpdate(){
        console.log(this.props.searchValue);
        this.props.filterSearch(this.props.searchValue);
    }
    
    render(){

        return (<div>Importing data</div>);
    };
}

const mapDispatchToProps = (dispatch) =>({
    // viewAll: () => dispatch(viewAllAction())
    addItem: (payload) => dispatch(addItem(payload)),
    filterSearch: (searchValue) => dispatch(filterSearch(searchValue))
});

export default connect(
    null,
    mapDispatchToProps,
  )(ImportData);