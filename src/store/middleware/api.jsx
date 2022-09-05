import axios from "axios"
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api"

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== apiCallBegan.type) return next(action)

        const { url, method, data, onSuccess, onStart, onError } = action.payload

        if (onStart) dispatch({ type: onStart })

        try {
            const res = await axios.request({
                baseURL: "http://localhost:8080/",
                url,
                method,
                data,
            })
            //general success
            dispatch(apiCallSuccess(res.data))
            //specific success
            if (onSuccess) dispatch({ type: onSuccess, payload: res.data })
        } catch (err) {
            //general error
            dispatch(apiCallFailed(err))
            //specific error
            if (onError) return dispatch({ type: onError, payload: err.message })
        }
    }

export default api
