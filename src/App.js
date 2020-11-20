import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import CustomerRouter from './router/CustomerRouter'
import AdminRouter from './router/AdminRouter'

function App() {
  return (
      <Router>
        <CustomerRouter />
        <AdminRouter />
      </Router>
  
  );
}

export default App;
