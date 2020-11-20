import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from '../components/user/PrivateRoute'
import Login from '../components/user/Login'
import Home from '../components/Home'
import Profile from '../components/user/Profile'
import MenuHeader from '../components/MenuHeader'

const CustomerRouter = () =>{
    return(
    <React.Fragment>
        <MenuHeader />
        <PrivateRoute exact path='/' component={ Home }/>
        <PrivateRoute exact path='/profile' component={ Profile }/>
        <Route exact path='/login' component={ Login }/>
    </React.Fragment>
    )
    
}

export default CustomerRouter