import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../redux/slices/auth'

const MenuHeader = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
  
    const handleLogout = () =>{
        dispatch(logoutUser())
    } 
    return (
        <Menu>
        <Menu.Item
         name='home'            
        />
        <Menu.Menu position='right'> 
            { user ? 
                <Menu.Item onClick={ handleLogout }>Logout</Menu.Item>
                : <Link to='/login'><Menu.Item>Login</Menu.Item></Link>
            }
            </Menu.Menu>
        </Menu>
    );
}

export default MenuHeader