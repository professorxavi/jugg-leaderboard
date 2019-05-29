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
    this.getLeaderboard = this.getLeaderboard.bind(this);
  }
  componentDidMount() {
    this.state.client.updateTable(this.updateTable);
    this.getLeaderboard();
  }
  componentWillUpdate() {
    this.state.client.updateTable(this.updateTable);
    this.getLeaderboard();
  }

  getLeaderboard() {
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
