const goods = (state = [], action) => {
    switch(action.type){
        case 'ADD_GOODS':
            console.log('add goods work');
            console.log(state);
            console.log(action.id);
            console.log(action.title);
            console.log(action.image);
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    image: action.image
                }
            ]
        default:
            return state
    }
}

export default goods