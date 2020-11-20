import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../components/admin/Dashboard'
const AdminRouter = () =>{
    return (
        <React.Fragment>

            <Route exact path='/dashboard' component={ Dashboard }/>
        
        </React.Fragment>
    )
}

export default AdminRouter