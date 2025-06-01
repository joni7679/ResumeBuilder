import { createSlice } from "@reduxjs/toolkit"



//  create a initialstate...........
let initialState = {
    users: [],
    isLoding: false,
    isLogedIn: false,
    currentuser: null,
    error: null
}

// create slice............
const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        // action type
        // action creator
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        removeUser: (state, action) => {
            state.users = users.filter((user) => user.id !== action.payload)
        },
        editUser: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return { ...user, ...action.payload }
                }
                return user
            })
        }

    }
})

export const { addUser, removeUser, editUser } = userSlice.reducer;
export default userSlice.reducer;