import React, {Component} from 'react';
import { NavLink, Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Home from './Home'
import Projects from './Projects'
import Create from './Create'
import Title from '../components/Title'
import Tabs from '../components/Tabs'

import styled from 'styled-components'
import styles from '../styles/style-constants'
// with default styles:
import '../styles/App.css'

let activeStyle = {
  fontWeight: "bold",
  color: styles.colors.aquamarine
}

const PAGES = {
  'HOME': {
    route: '/home'
  },
  'PROJECTS': {
    route: '/projects'
  }
}

const PAGECONTAINERS = {
  '/home': Home,
  '/create': Create,
  '/projects': Projects
}

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(PAGES)
    let { pagename } = this.props

    return (
      <div className="App" style={{background: styles.colors.mblue}}>
        <Router>
          <Header>
            <HeaderInfo>
              <Title title="{ BOOKS & BASH }" />
              { /* <Tabs children={PAGES}/> */}
              <NavLink to={{pathname: "/home", state: {pagename: "home"}}}
              style={{ textDecoration: 'none', color: 'white'  }}
              activeStyle={activeStyle}>
              HOME2
              </NavLink>
              <NavLink to={{pathname: "/projects", state: {pagename: "projects"}}}
              style={{ textDecoration: 'none', color: 'white' }}
              activeStyle={activeStyle}>
            PROJECTS2
              </NavLink>
            </HeaderInfo>
          </Header>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects}/>
            <Route path="/create" component={Create} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
    pagename: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};

export default App;

const Header = styled.header`
  background-color: rgba(0,0,0);
  opacity: 0.8;
  padding: 10px;
  position: fixed;
  width:100%;
  top:0;
  z-index: 1;
  display: flex;
  justify-content: center;
`

const HeaderInfo = styled.div`
  display:flex;
  justify-content: space-between;
  width: 90%;
`
