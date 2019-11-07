// import axios from 'axios';
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
