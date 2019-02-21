import { ADD_ACTIVITY, ADD_ADDRESS } from './actions';


const initialState = {
    activity: null,
    address: null,
}

const activityReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ACTIVITY: {
            return {
                ...state,
                activity: {
                    ...action.payload
                },
            }
        }
        case ADD_ADDRESS: {
            return {
                ...state,
                address: {
                    ...action.payload
                },
            }
        }
        default:
            return state;
    }
}

export default activityReducer;