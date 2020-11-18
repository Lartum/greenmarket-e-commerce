import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import MenuHeader from './components/MenuHeader'

function App() {
  return (
      <Router>
        <MenuHeader />
        <PrivateRoute exact path='/' component={ Home }/>
        <PrivateRoute exact path='/profile' component={ Profile }/>
        <Route exact path='/login' component={ Login }/>
      </Router>
  
  );
}

export default App;
