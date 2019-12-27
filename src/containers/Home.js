import React, {Component} from 'react';
import '../styles/Home.css';
import styled from 'styled-components'
import styles from '../styles/constants.js'
import Title from '../components/Title'



class Home extends Component {
 constructor(props) {
   super(props)

   this.state = {}
 }
 render(){
    return (
      <div className="Home">
        <header className="Home-header">
          <Title title="ONE PERCENT BETTER" />
        </header>
        <div>
          
        </div>
      </div>
    );
  }
}



export default Home;
