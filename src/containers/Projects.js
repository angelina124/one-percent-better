import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

import ProjectTable from '../components/ProjectTable'

import styles from '../styles/style-constants'
import {apiAddress} from '../constants'

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postData: [],
      loading: true,
      fetched: false,
      error: false
    }

    this.fetchProjectData = this.fetchProjectData.bind(this)
  }

  componentDidMount(){
    this.fetchProjectData()
  }

  render(){
    const { postData, loading, fetched, error } = this.state
     return (
       <div>
           <ProjectTable data={postData.data} loading={loading} fetched={fetched} error={error} />
       </div>
     );
   }

 fetchProjectData(){
   console.log("fetching")
    axios.defaults.port = 3001;

   axios.get(apiAddress + 'projects/').then((data) => {
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

Projects.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  fetched: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

export default Projects;
