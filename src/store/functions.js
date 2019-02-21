export const requestSuccess = 
    (actionType, result) => {
        return {
            type: actionType,
            payload: {
                data: result,
                status: 'success',
                error: null,
            }
        }
    }

export const requestStart = (actionType) => 
{
    return {
        type: actionType,
        payload: {
            data: null,
            status: 'pendding',
            error: null,
        }
    }
}

export const requestFaild = (actionType, error) => {
    return {
        type: actionType,
        payload: {
            data: null,
            status: 'faild',
            error: error,
        }
    }
}