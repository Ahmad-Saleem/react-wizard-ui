import { combineReducers } from 'redux';
import activityReducer from '../screens/activity/reducer';

const rootReducer = combineReducers({
    activity: activityReducer,
});

export default rootReducer;