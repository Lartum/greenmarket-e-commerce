import { createSlice } from '@reduxjs/toolkit'
import { firebaseAuth  } from '../../firebase/firebase'


const initialCustomer = localStorage.getItem('customerData')
                    ? localStorage.getItem('customerData')
                    : null

const initalAdmin = null                    
const userSlice = createSlice({
    name: 'auth',
    initialState : {
        customer: initialCustomer,
        admin: initalAdmin
    },

    reducers:{
        CURRENT_CUSTOMER: (state, action) => {
            state.customer = action.payload
        },
        CURRENT_ADMIN: (state, action) => {
            state.admin = action.payload
        },
        LOGOUT_CUSTOMER_SUCCESS: (state, action) => {
            state.customer = null
        },
        LOGOUT_ADMIN_SUCCESS: (state, action) => {
            state.admin = null
        },
    }

})

export default userSlice.reducer

const { CURRENT_CUSTOMER, CURRENT_ADMIN, LOGOUT_CUSTOMER_SUCCESS, LOGOUT_ADMIN_SUCCESS } = userSlice.actions

export const currentCustomer = () => async dispatch =>{
    try {
        const setCustomer = firebaseAuth.currentUser.providerData[0]
        localStorage.setItem('customerData', setCustomer)
        dispatch(CURRENT_CUSTOMER(setCustomer))
    } catch (error) {
        return error.message
    }
}

export const currentAdmin = () => async dispatch =>{
    try {
        const setAdmin = firebaseAuth.currentUser.providerData[0]
        dispatch(CURRENT_ADMIN(setAdmin))
    } catch (error) {
        return error.message
    }
}



export const logoutUser = () => async dispatch =>{
    try {
        await firebaseAuth.signOut()
        localStorage.removeItem('customerData')
        dispatch(LOGOUT_CUSTOMER_SUCCESS())
    } catch (error) {
        return error.message
    }
}

export const logoutAdmin = () => async dispatch =>{
    try {
        await firebaseAuth.signOut()
        dispatch(LOGOUT_ADMIN_SUCCESS())
    } catch (error) {
        return error.message
    }
}