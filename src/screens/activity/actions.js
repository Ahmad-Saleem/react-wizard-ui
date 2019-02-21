import axios from 'axios';
import {requestStart, requestSuccess, requestFaild} from '../../store/functions';

export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const addActivity = (name, recommendAge, webpage, phone) => {
    return {
        type: ADD_ACTIVITY,
        payload: {
            name,
            recommendAge,
            webpage,
            phone,
        }
    }
}

export const ADD_ADDRESS = 'ADD_ADDRESS';
export const addAddress = (placeName, postcode, buildingUnit, buildingName, streetNumber, streetName, town) => {
    return {
        type: ADD_ADDRESS,
        payload: {
            placeName, 
            postcode, 
            buildingUnit, 
            buildingName, 
            streetNumber, 
            streetName, 
            town
        }
    }
}

export const COPY_ADDRESS_FROM_EXISTING_ACTIVITY = 'COPY_ADDRESS_FROM_EXISTING_ACTIVITY';
export const copyAddressFromExistingActivity = () => {
    return (dispatch) => {
    
        dispatch(requestStart(COPY_ADDRESS_FROM_EXISTING_ACTIVITY));

        const request = axios.get(`http://stepx.me/addresses.json`, {
            headers: {'Access-Control-Allow-Origin': '*'}
        });
        
        return request.then(
            result => dispatch(requestSuccess(COPY_ADDRESS_FROM_EXISTING_ACTIVITY, result.data)),
            error => dispatch(requestFaild(COPY_ADDRESS_FROM_EXISTING_ACTIVITY, error))
        );
    }
}