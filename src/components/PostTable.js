import React from 'react';
import dateFormat from 'dateformat'

import PropTypes from 'prop-types'
import '../styles/Home.css';
import styles from '../styles/style-constants'
import styled from 'styled-components'
import PostTitle from './PostTitle'

const ReactMarkdown = require('react-markdown')

// contents of a post should either be in plaintext, markdown, or html
const Cell = (props) => {
  const {title, date, content, labels} = props
  return (
    <Post>
      <PostTitle title={title} />
      <Date>{ dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT") }</Date>
      <div style={{fontFamily: "Palatino"}}>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
      />
      </div>
    </Post>

  )
}

const TableRows = (props) => {
  const { data } = props
  console.log(data)
  return <Table>{data.map((post, i) => {
    console.log(post)
    return (<div key={post._id} index={i} style={{marginBottom: "24px"}}>
      <Cell title={post.title} date={post.createdAt} content={post.content} labels={post.labels}/>
    </div>)
  })}</Table>
}

const LoadingIndicator = () => (
  <tr>
    <td>
      <i
        className="fas fa-spinner fa-spin"
      />
        Fetching Posts
    </td>
  </tr>
)

const ErrorIndicator = () => (
  <span>
    <td>
      <i
        className="fas fa-exclamation-triangle"
      />
        Could not fetch posts
    </td>
  </span>
)

const PostTable = ({
  data, fetched, loading, error
}) => {
  console.log(data)
  switch (true) {
    case !fetched && loading:
      return <LoadingIndicator />
    case error:
      return <ErrorIndicator />
    default:
      return <TableRows data={data} />
  }
}

PostTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetched: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

const Date = styled.div`
  color: ${styles.colors.mediumorchid};
  font-size: 0.8em;
  margin-bottom: 12px;
  margin-top: 6px;
`

const Post = styled.div`
  background-color: ${styles.colors.mblue};
  color: white;
  opacity: 0.9;
  padding: 64px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
  border-radius: 10px;
`

const Table = styled.div`
  transform-origin: 0;
  transform: scale(0.5);
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export default PostTable;
