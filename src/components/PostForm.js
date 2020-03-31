import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser'
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
    this.changeTags = this.changeTags.bind(this)

    this.state = {
      title: "",
      content: "",
      percentBetter: 0,
      tags: ""
    }
  }

  changeTitle(event) {
    this.setState({title: event.target.value || ""});
  }

  changeContent(event) {
    this.setState({content: event.target.value || "oops"});
  }

  changePercent(event) {
    this.setState({percentBetter: parseFloat(event.target.value) || ""});
  }

  changeTags(event) {
    this.setState({tags: event.target.value || []});
  }

  createPost(event){
    console.log("creating post")
    const {title, content, percentBetter, tags} = this.state
    const requestBody = {
      title: title,
      content: content,
      percentBetter: percentBetter,
      tags: tags
    }
    axios.defaults.port = 3001;
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
        <PostContent rows="30" cols="100" value={this.state.content} onChange={this.changeContent}/>
        <FormLabel>
          <FormLabelP>PERCENT BETTER</FormLabelP>
          <Input type="number" step="0.05" value={this.state.percentBetter} onChange={this.changePercent}/>
        </FormLabel>
        <FormLabel>
          <FormLabelP>LABELS</FormLabelP>
          <Input type="text" placeholder="Labels" value={this.state.tags} onChange={this.changeTags}/>
        </FormLabel>
        <input type="submit" value="Submit" style={{margin: "12px", fontSize: "1em", padding: "12px"}}/>
      </Form>
    )
  }
}

const FormLabelP = styled.p`
  padding-right: 12px;
  font-size: 0.8em;
  font-family: Courier
`

const FormLabel = styled.label`
  display: flex;
  flex-direction: row;
  height: 24px;
  align-items: center;
  padding: 12px
`

const PostContent = styled.textarea`
  margin-top: 12px;
  border-radius: 5px;
`

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
