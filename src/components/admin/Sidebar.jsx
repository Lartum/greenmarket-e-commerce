import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
 
const Sidebar = () => {
    const [ activeItem, setActiveItem ] = useState(null)

    const handleClick = (e) =>{
        setActiveItem(e.targe.name)
    }
    
    return (
        <Menu secondary vertical>
        <Menu.Item
         name='account'
        //  active={ setActiveItem('account')}
         onClick={handleClick}
        >
        </Menu.Item>
        <Menu.Item
         name='items'
        //  active={ setActiveItem('account')}
         onClick={handleClick}   
        >
            
        </Menu.Item>
    </Menu>
    )
}

export default Sidebar