import axios from 'axios';

export function viewAllAction() {
    return { type: 'TESTING' };
}

export function addItem({ sprites, species, height, weight }) {
    return {
        type: 'ADD_ITEM',
        payload: {
            sprites,
            species,
            height,
            weight,
        }
    };
}

export const filterSearch = (searchValue) => {
    return dispatch => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?query=${searchValue}`).then(res => {
            // return res.data;
            console.log(res.data);
            // dispatch({type: 'FILTER_SEARCH', payload: res.data});
        }).catch(e =>{
            console.log(searchValue);
            return console.log('could not fulfill asyc request');
        });
    }
}