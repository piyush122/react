import React from 'react';
import './index1.css';
import { Button, ButtonGroup, Form, Row, Col, Image } from 'react-bootstrap';

class Home extends React.Component {

	constructor(props) {
    super(props);
    this.state = {value: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit(event) {
		console.log(this.props);
    event.preventDefault();
    this.props.router.push('/');
	}

	handleClick(event) {
		console.log(this.props);
    event.preventDefault();
    this.props.router.push('/post');
	}

	render() {
    return (
      <div>
      	<Form onSubmit={this.handleSubmit}>
      	 	<Row>
		    	  
	    		</Row>
        	<ButtonGroup vertical>
				   	<Button disabled>Home</Button>
				    <Button onClick={this.hanleClick}>Make A Tweet</Button>
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