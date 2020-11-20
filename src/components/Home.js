import React from 'react'
// import { Button } from 'semantic-ui-react'
// import { useDispatch, useSelector } from 'react-redux'
// import { logoutUser } from '../redux/slices/auth'
// import { getUsersData, findUser } from '../hooks/useFirestore' 

const Home = () => {
    // const dispatch = useDispatch()
    // const { user } = useSelector(state => state.auth)

    // findUser("email", user.email)
    
    // const handleLogout = () =>{
    //     dispatch(logoutUser())
    // } 

    return (
        <div>
            <p>Welcome to greenMarket</p>
            {/* <h1>welcome {user.email}</h1>
            <Button onClick={handleLogout}>Logout</Button> */}
        </div>
    );
}

export default Home;