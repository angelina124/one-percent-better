import React from 'react';
import dateFormat from 'dateformat'

import PropTypes from 'prop-types'
import '../styles/Home.css';
import styles from '../styles/style-constants'
import styled from 'styled-components'
import PostTitle from './PostTitle'

const ReactMarkdown = require('react-markdown')

// contents of a project should either be in plaintext, markdown, or html
const Cell = (props) => {
  const {title, date, about, tags, gitRepo} = props
  return (
    <Project>
      <PostTitle title={title} />
      <Date>{ dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT") }</Date>
      <div style={{fontFamily: "Palatino"}}>
        <ReactMarkdown
          source={about}
          escapeHtml={false}
        />
        { gitRepo != "No git repo for this project" && <a href={gitRepo} target="_blank">See git repository</a> }
      </div>
    </Project>

  )
}

const TableRows = (props) => {
  const { data } = props
  console.log(data)
  return <Table>{data.map((project, i) => {
    console.log(project)
    return (<div key={project._id} index={i} style={{marginBottom: "24px"}}>
      <Cell title={project.title} date={project.createdAt} about={project.about} tags={project.tags} gitRepo={project.gitRepo}/>
    </div>)
  })}</Table>
}

const LoadingIndicator = () => (
  <tr>
    <td>
      <i
        className="fas fa-spinner fa-spin"
      />
        Fetching Projects
    </td>
  </tr>
)

const ErrorIndicator = () => (
  <span>
    <td>
      <i
        className="fas fa-exclamation-triangle"
      />
        Could not fetch projects
    </td>
  </span>
)

const ProjectTable = ({
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

ProjectTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetched: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

const Date = styled.div`
  color: ${styles.colors.mediumorchid};
  font-size: 0.8em;
  margin-bottom: 12px
`

const Project = styled.div`
  background-color: white;
  color: ${styles.colors.charcoal};
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

export default ProjectTable;
