import axios from "axios"
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api"

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== apiCallBegan.type) return next(action)

        const { url, method, data, headers, onSuccess, onStart, onError } = action.payload

        if (onStart) dispatch({ type: onStart })

        try {
            const res = await axios.request({
                baseURL: process.env.REACT_APP_BACKEND_BASE,
                url,
                method,
                data,
                headers,
            })
            //general success
            dispatch(apiCallSuccess(res.data))
            dispatch(apiCallFailed(res.err))
            if (onSuccess) dispatch({ type: onSuccess, payload: res.data })
        } catch (err) {
            //general error
            dispatch(apiCallFailed(err))
            //specific error
            if (onError) return dispatch({ type: onError, payload: err.response.data })
        }
    }

export default api
