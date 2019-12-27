import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import '../styles/App.css';
import styles from '../styles/constants'

function App() {
  return (
    <div className="App" style={{background: styles.colors.mblue}}>
      <header className="App-header">
        <Router>
          <Route path='/home' component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;
