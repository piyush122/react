import React from 'react';
import { Table, Button } from 'react-bootstrap';

class Timeline extends React.Component {

	handleSubmit(event) {
		console.log(this.props);
    event.preventDefault();
    this.props.router.push('/');
	}

	render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>User</th>
              <th>Tweet</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
          <Button bsStyle="link">Go To Home</Button>
      </div>
    );
  }
}

export default Timeline;