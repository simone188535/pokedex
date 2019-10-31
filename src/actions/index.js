export function viewAllAction() {
    return { type: 'TESTING' };
}

export function addItem({sprites, species, height, weight}) {
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