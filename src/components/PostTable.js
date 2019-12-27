import React, {Component} from 'react';
import '../styles/Home.css';
import styled from 'styled-components'

const Cell = (props) => {
  const {name, date, text, labels} = props
  return <div></div>
}

const TableRows = (props) => {
  const { data } = props
  return data.map((posts, i) => (
    <Row key={post.id} index={i}>
      {posts.map((post) => {
        return <Cell name=post.name date=post.date_modified text=post.text labels=post.labels/>
      }
    </Row>
  ))
}

class PostTable extends Component {
 constructor(props) {
   super(props)

   this.state = {}
 }
 render(){
    return (
      <div className="Home">
        <Table>
          <Row>

          </Row>
        </Table>
      </div>
    );
  }
}

const Table = styled.table`
  background-color: blue;
`

const Row = styled.tr

export default Home;
