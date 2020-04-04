import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

import homebg from '../assets/homebg.jpg'

import styles from '../styles/style-constants'
import {apiAddress} from '../constants'
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
          <PostTable data={postData.data} loading={loading} fetched={fetched} error={error} />
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
  opacity: 0.8;
  padding: 10px;
  position: fixed;
  width:100%;
  top:0;
  z-index: 1;
`

export default Home;
