const ValidationReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE': {
            return ({
                ...state,
                data: {
                    ...state.data,
                    [action.payload.name]: action.payload.value
                }
            })

        };
        case 'SUBMIT': {

        };
        default:
            return state;
    }
}
export default ValidationReducer