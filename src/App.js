import React, {Component} from 'react';
import { Container, Row } from 'react-bootstrap';
import  { Leaderboard } from './leaderboard';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [
        {
          name: 'something',
          kills: 12,
          deaths: 2
        },
        {
          "name": "ghsfg",
          "kills": 2,
          'deaths': 12
        },
        {
          "name": "djhgnd",
          "kills": 45,
          "deaths": 23
        },
        {
          "name": "bvnb",
          "kills": 3,
          "deaths": 23
        },
        {
          "name": "nbcnvcbn",
          "kills": 54,
          "deaths": 23
        },
        {
          "name": "rtytuytu",
          "kills": 63,
          "deaths": 23
        },
        {
          "name": "fghgdfhdfghd",
          "kills": 54,
          "deaths": 3
        }
      ],
    };
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
