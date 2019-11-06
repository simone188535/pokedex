export function addItem({ name, sprite, allTypes, allStats, allMoves, height, weight }) {
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
// export function filterSearch(payload) {
//     return {
//         type: 'FILTER_LIST',
//         payload

//     }
// }