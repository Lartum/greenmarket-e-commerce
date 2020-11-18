import { createSlice } from '@reduxjs/toolkit'
import { firebaseAuth  } from '../../firebase/firebase'


const initialUser = localStorage.getItem('userData')
                    ? localStorage.getItem('userData')
                    :null


const userSlice = createSlice({
    name: 'auth',
    initialState : {
        user: initialUser
    },

    reducers:{
        setCurrentUser: (state, action) => {
            state.user = action.payload
        },
        logoutSuccess: (state, action) => {
            state.user = null
        }
    }

})

export default userSlice.reducer

const { setCurrentUser, logoutSuccess } = userSlice.actions

export const currentUser = () => async dispatch =>{
    try {
        const setUser = firebaseAuth.currentUser.providerData[0]
        localStorage.setItem('userData', setUser)
        dispatch(setCurrentUser(setUser))
    } catch (error) {
        return error.message
    }
}

export const logoutUser = () => async dispatch =>{
    try {
        await firebaseAuth.signOut()
        localStorage.removeItem('userData')
        dispatch(logoutSuccess())
    } catch (error) {
        return error.message
    }
}