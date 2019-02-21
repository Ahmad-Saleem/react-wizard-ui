import { ADD_ACTIVITY, ADD_ADDRESS, COPY_ADDRESS_FROM_EXISTING_ACTIVITY } from './actions';


const initialState = {
    activity: null,
    address: null,
    addressHistory: null,
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
        case COPY_ADDRESS_FROM_EXISTING_ACTIVITY: {
            return {
                ...state,
                addressHistory: {
                    ...action.payload
                }
            }
        }
        default:
            return state;
    }
}

export default activityReducer;