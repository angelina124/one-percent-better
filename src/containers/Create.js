import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import homebg from '../assets/homebg.jpg'

import styles from '../styles/style-constants'
import apiAddress from '../constants'
import Title from '../components/Title'
import PageTitle from '../components/PageTitle'
import PostForm from '../components/PostForm'

class Create extends Component {
 constructor(props) {
   super(props)
 }

 render(){
    return (
      <Container>
        <Header>
          <PageTitle title="ONE PERCENT BETTER" color="turquoise"/>
          <PageTitle title="CREATE" color="mediumorchid"/>
        </Header>
        <Content>
            <PostForm/>
        </Content>
      </Container>
    );
  }
}


const Header = styled.header`
  background-color: rgba(0,0,0,.5);
  padding: 10px;
  position: fixed;
  width:100%;
  top:0;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homebg});
`


const Content = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 2px;
  background-color: black;
  display: flex;
  flex-direction: column;
`


export default Create;
