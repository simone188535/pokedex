// import axios from 'axios';
// import _ from 'lodash';

export function viewAllAction() {
    return { type: 'TESTING' };
}

export function addItem({ name, sprites, types, stats, moves, height, weight }) {
    return {
        type: 'ADD_ITEM',
        payload: {
            name,
            sprites,
            types,
            stats,
            moves,
            height,
            weight,
        }
    };
}

// export const allListItems = () => {
//     return dispatch => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=5`).then(res => {
           
//         // console.log(res.data.results)
//          _.each((res.data.results),(value)=>{
//                 return value.name;
                
//             });
//             // dispatch({type: 'FILTER_SEARCH', payload: res.data});
//         }).then(res =>{
//             // console.log(res);
//         }).catch(e =>{
//             return console.log('could not fulfill asyc request', e);
//         });
//     }
// }

// export const allListItems = (searchValue) => {
//     return dispatch => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}/?limit=100&offset=50`).then(res => {
//             // return res.data;
//             console.log(res.data);
//             // dispatch({type: 'FILTER_SEARCH', payload: res.data});
//         }).catch(e =>{
//             console.log(searchValue);
//             return console.log('could not fulfill asyc request');
//         });
//     }
// }
// export const allListItemsAction =(searchValue)=> {

// }