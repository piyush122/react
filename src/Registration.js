import React, { Component } from 'react';
import { Form, Col, FormGroup, ControlLabel,FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class  Registration extends Component{
	render() {
		return(
			<div>
        <Form horizontal>
			    			    
        	<FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={2}>
			        User Name
			      </Col>
			      <Col sm={10}>
			        <FormControl type="text" placeholder="User Name" />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={2}>
			        Email
			      </Col>
			      <Col sm={10}>
			        <FormControl type="email" placeholder="Email" />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalPassword">
			      <Col componentClass={ControlLabel} sm={2}>
			        Password
			      </Col>
			      <Col sm={10}>
			        <FormControl type="password" placeholder="Password" />
			      </Col>
			    </FormGroup>
			    
			    <FormGroup controlId="formHorizontalPassword">
			      <Col componentClass={ControlLabel} sm={2}>
			        Confirm Password
			      </Col>
			      <Col sm={10}>
			        <FormControl type="password" placeholder="Confirm Password" />
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