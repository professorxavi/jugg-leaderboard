import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import  Competitor from './Competitor';

class Leaderboard extends Component {
  render() {
    const sortedData = this.props.data.sort(function(a,b){
      if (a.kills===b.kills){
        return (a.deaths - b.deaths);
      }
      return b.kills - a.kills;
    });;
    const something = sortedData.map((c, index) => {
      return(
        <Competitor data={c} />
      );
    });

    return (
    <Col xs={12}>
      <Table striped hover borderless size="sm" variant="darkt">
        <thead>
          <tr>
            <th className="left-align">Name</th>
            <th>Kills</th>
            <th>Dieds</th>
          </tr>
        </thead>
        <tbody>
          { something }
        </tbody>
      </Table>
    </Col>
  );
  }
}

export default Leaderboard;
