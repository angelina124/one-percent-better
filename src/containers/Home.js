import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import homebg from '../assets/homebg.jpg'

import styles from '../styles/style-constants'
import apiAddress from '../constants'
import Title from '../components/Title'
import PostTable from '../components/PostTable'

class Home extends Component {
 constructor(props) {
   super(props)

   this.state = {
     postData: [],
     loading: true,
     fetched: false,
     error: false
   }

   this.fetchPostData = this.fetchPostData.bind(this)
 }

 componentDidMount(){
   this.fetchPostData()
 }

 render(){
   const { postData, loading, fetched, error } = this.state
    return (
      <div>
        <Header>
          <Title title="ONE PERCENT BETTER" />
        </Header>
        <Container>
          <Background/>
          <Content>
            <PostTable data={postData.data} loading={loading} fetched={fetched} error={error} />
          </Content>
        </Container>
      </div>
    );
  }

  fetchPostData(){
    console.log("fetching")
     axios.defaults.port = 3001;

    axios.get(apiAddress + 'posts/').then((data) => {
      console.log(data)
      this.setState({
        postData: data.data,
        loading: false,
        fetched: true,
        error: false
      })
    }, (error) => {
      console.log(error)
      this.setState({
        loading: false,
        fetched: false,
        error: true
      })
    })
  }
}

Home.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  fetched: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

const Header = styled.header`
  background-color: rgba(0,0,0,.5);
  padding: 10px;
  position: fixed;
  width:100%;
  top:0;
  z-index: 1;
`

const Container = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 20px;
  perspective-origin: 0%;
  transform: translateZ(0px);
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

const Content = styled.div`
  fontFamily: Merriweather;
  margin-top: 24px;
  transform-origin: 0;
  transform: translateZ(10px);
`

export default Home;
