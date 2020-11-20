import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: RouteComponent, ...rest }) =>{ 
    const { user } = useSelector(state  => state.auth)

    return(
        <Route
        { ...rest }
        render={routeProps =>
        user !== null 
        ? 
        ( <RouteComponent { ...routeProps } /> )
        :
        (<Redirect to={'/Login'}/>)
        }
        />
    )
}


export default PrivateRoute