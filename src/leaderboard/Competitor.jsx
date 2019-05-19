import React, { Component } from 'react';

class Competitor extends Component {
  render() {
    const data = this.props.data;
    return (
      <tr>
        <td className="left-align">{data.name}</td>
        <td>{data.kills}</td>
        <td>{data.deaths}</td>
      </tr>
  );
  }
}

export default Competitor;
