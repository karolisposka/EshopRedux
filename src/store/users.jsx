import { createSlice } from "@reduxjs/toolkit"

let lastId = 0
const slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (users, actions) => {
            users.push({
                id: ++lastId,
                name: actions.payload.name,
            })
        },
    },
})

export const { addUser } = slice.actions
export default slice.reducer
