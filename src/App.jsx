import React, {Component} from 'react';
import axios from 'axios';
import socket from './socket';
import { Container, Row } from 'react-bootstrap';
import  { Leaderboard } from './leaderboard';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      client: socket(),
    };
    this.updateTable = this.updateTable.bind(this);
  }
  componentDidMount() {
    this.updateTable();
  }

  componentDidUpdate(previousProps, previousState) {
    this.state.client.updateTable(this.updateTable);
  }

  updateTable() {
    axios.get('http://localhost:7777/leaderboard/')
      .then(response => this.setState({ team: response.data }));
  }

  render () {
    return (
      <div className="App">
        <Container>
          <Row>
            <Leaderboard data={this.state.team} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
