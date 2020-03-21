import React, {Component} from 'react';
import ReactHtmlParser from 'react-markdown'
import dateFormat from 'dateformat'
import axios from 'axios'

import PropTypes from 'prop-types'
import apiAddress from '../constants'
import styles from '../styles/style-constants'
import styled from 'styled-components'
import PostTitle from './PostTitle'


class PostForm extends Component {
  constructor(props){
    super(props)
    this.createPost = this.createPost.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeContent = this.changeContent.bind(this)
    this.changePercent = this.changePercent.bind(this)

    this.state = {
      title: "",
      content: "",
      percentBetter: 0
    }
  }

  changeTitle(event) {
    this.setState({title: event.target.value || ""});
  }

  changeContent(event) {
    this.setState({content: event.target.value || ""});
  }

  changePercent(event) {
    this.setState({percentBetter: parseFloat(event.target.value) || ""});
  }

  createPost(event){
    console.log("creating post")
    const {title, content, percentBetter} = this.state
    const requestBody = {
      title: title,
      content: content,
      percentBetter: percentBetter
    }
    axios.post(apiAddress + 'posts/', requestBody).then((data) => {
      console.log(data)
    }, (error) => {
      console.log(error)
    })
  }

  render(){
    return (
      <Form onSubmit={this.createPost}>
        <Input placeholder="Title" type="text" value={this.state.title} onChange={this.changeTitle} style={{fontSize: "1.2em"}}/>
        <input type="file" name="post"/>
        <label style={{display: "flex", flexDirection: "row", height: "24px", alignItems: "center", padding: "12px"}}>
          <p style={{paddingRight: "12px", fontSize: "0.8em", fontFamily: "Courier"}}>PERCENT BETTER</p>
          <Input type="number" step="0.05" value={this.state.percentBetter} onChange={this.changePercent}/>
        </label>
        <input type="submit" value="Submit" style={{margin: "12px", fontSize: "1em", padding: "12px"}}/>
      </Form>
    )
  }
}

const Form = styled.form`
  margin-top: 64px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Input = styled.input`
  border-radius: 5px;
  font-family: Courier;
  padding: 4px;
`



export default PostForm;
