import React from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Create from './Create'
import '../styles/App.css';
import styles from '../styles/style-constants'

function App() {
  return (
    <div className="App" style={{background: styles.colors.mblue}}>
      <header className="App-header">
        <Router>
          <Route path='/home/' component={Home} />
        </Router>
        <Router>
          <Route path='/' component={Home} />
        </Router>
        <Router>
          <Route path='/create/' component={Create} />
        </Router>
      </header>
    </div>
  );
}

export default App;
