import logo from './logo.svg';
import './App.css';
import './Gridcomp.js'
import { Grid } from '@mui/material';
import Gridcomp from './Gridcomp.js';
import Username from './Username';
import { BrowserRouter as Router, Switch,Routes, Route,Link } from 'react-router-dom';
import Dashboard from './Dashboard';
/*function App() {
  return (
    <div className="App">
      this app should be working
      <Username name='vamshi' photoUrl='https://clipground.com/images/profile-logo-6.jpg' position='manager' />
      
    </div>
  );
}

 export default App;*/

export default function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={<Username name='vamshi' photoUrl='https://clipground.com/images/profile-logo-6.jpg' position='manager' />} />
    //     <Route path="/about" component={<Dashboard/>} />
    //   </Switch>
    // </Router>
    
    <Router>
      <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">About</Link></li>
    </ul>
  </nav>
    <Routes>
      <Route path="/" element={<Username name='vamshi' photoUrl='https://clipground.com/images/profile-logo-6.jpg' position='manager' />} />
      
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router>
      
  );
}
