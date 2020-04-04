import React, {Component} from 'react';
import { NavLink, Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Home from './Home'
import Projects from './Projects'
import Create from './Create'
import Title from '../components/Title'

import styled from 'styled-components'
import styles from '../styles/style-constants'
import {PAGES} from '../constants'
// with default styles:
import '../styles/App.css'
import homebg from '../assets/homebg.jpg'

let activeStyle = {
  fontWeight: "bold",
  color: styles.colors.aquamarine
}

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="App">
      <Background/>
        <Router>
          <Header>
            <Title title="{ BOOKS & BASH }"/>
            <HeaderInfo>
              {
                PAGES.map((page) => (
                  <NavLink to={{pathname: page.route, state: {pagename: page.name}}}
                  style={{ textDecoration: 'none', color: 'white'  }}
                  activeStyle={activeStyle}>
                  {page.name}
                  </NavLink>
                ))
              }
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
  justify-content: space-between;
`

const Background = styled.div`
  background-image: url(${homebg});
  background-size: 500%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateZ(0px);
`

const HeaderInfo = styled.div`
  @media (max-width: 800px){
    width: 40%;
  }
  @media (max-width: 1200px){
    width: 35%;
  }
  @media (min-width: 1201px){
    width: 25%;
  }
  display: flex;
  justify-content: space-evenly;
`
