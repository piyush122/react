import React from 'react';
import { FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

class Post extends React.Component {

	handleSubmit(event) {
		console.log(this.props);
    event.preventDefault();
    this.props.router.push('/');
	}

	render() {
    return (
      <div>
      	<FormGroup controlId="formControlsTextarea">
      		<ControlLabel>Post Here</ControlLabel>
      		<FormControl componentClass="textarea" placeholder="Whats on your mind" />
      		<Button bsStyle="primary">Post</Button>
   			</FormGroup>
      </div>
    );
  }
}

export default Post;