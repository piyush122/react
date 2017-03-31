import React, { Component } from 'react';
import { Form, Col, FormGroup, ControlLabel,FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class  Registration extends Component{
	constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	email: '',
    	password: '',
    	c_password: '',
    };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
	  console.log(event.target);
		if(event.target.id === 'name') {
	    this.setState({ fname: event.target.value });
	  } else if(event.target.id === 'email') {
	    this.setState({ lname: event.target.value });
	  } else if(event.target.id === 'password') {
	    this.setState({ email: event.target.value });
	  } else if(event.target.id === 'c_password') {
	    this.setState({ phone: event.target.value });
	  }
  }

	render() {
		return(
			<div>
        <Form horizontal onSubmit={this.handleRegistration}>
			    			    
        	<FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={2}>
			        User Name
			      </Col>
			      <Col sm={10}>
			        <FormControl type="text" id="name" name="name" onChange={this.handleChange} placeholder="User Name" />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={2}>
			        Email
			      </Col>
			      <Col sm={10}>
			        <FormControl type="email"  id="email" name="email" onChange={this.handleChange} placeholder="Email" />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalPassword">
			      <Col componentClass={ControlLabel} sm={2}>
			        Password
			      </Col>
			      <Col sm={10}>
			        <FormControl type="password"  id="password" name="password" onChange={this.handleChange} placeholder="Password" />
			      </Col>
			    </FormGroup>
			    
			    <FormGroup controlId="formHorizontalPassword">
			      <Col componentClass={ControlLabel} sm={2}>
			        Confirm Password
			      </Col>
			      <Col sm={10}>
			        <FormControl type="password"  id="c_password" name="c_password" onChange={this.handleChange} placeholder="Confirm Password" />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={2} sm={10}>
			        <ButtonToolbar>
				      	<Button bsStyle="primary" bsSize="large" type="submit">Sign Up</Button>
    					</ButtonToolbar>
			      </Col>
			    </FormGroup>

			    
			  </Form>
      </div>
		)
	}
}

export default Registration;