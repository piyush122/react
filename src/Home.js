import React from 'react';
import { Button, ButtonGroup, Form, Row, Col, Image } from 'react-bootstrap';

class Home extends React.Component {

	handleSubmit(event) {
		console.log(this.props);
    event.preventDefault();
    this.props.router.push('/');
	}

	render() {
    return (
      <div>
      	<Form onSubmit={this.handleSubmit}>
      	 	<Row>
		    	  <Col xs={6} md={4}>
		      	  <Image src="assets/thumbnail.jpg" circle />
		      	</Col>
	    		</Row>
        	<ButtonGroup vertical>
				   	<Button>Home</Button>
				    <Button>Make A Tweet</Button>
				    <Button>Timeline</Button>
				    <Button>Search For User</Button>
				    <Button>Followers</Button>
				    <Button>Following</Button>
				    <Button bsStyle="danger">Log Out</Button>
			  	</ButtonGroup>
			  </Form>
      </div>
    );
  }
}

export default Home;