import React from 'react';
import { Table, Button } from 'react-bootstrap';

class Following extends React.Component {

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table cell</td>
              <td>
                <Button bsStyle="link">Unfollow</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button bsStyle="link">Go To Home</Button>
      </div>
    );
  }
}

export default Following;