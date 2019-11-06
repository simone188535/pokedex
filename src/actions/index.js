
export const addItem = ({ name, sprite, allTypes, allStats, allMoves, height, weight }) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            name,
            sprite,
            allTypes,
            allStats,
            allMoves,
            height,
            weight,
        }
    };
}
export const fetchDetails = (payload) => async dispatch =>{
    console.log('fetchDetails is working', payload);
    dispatch({type: 'GET_DATA', payload});
    
}