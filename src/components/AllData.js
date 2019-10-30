import React, {Component} from 'react';
import axios from 'axios';


class ImportData extends Component {
    
    // constructor(){
    //     const publicAccessKey = publicKey.access_token;
    // }
    state = {
        allData : []
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

export default ImportData;