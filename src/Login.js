import React, { Component } from 'react';
import {  Form, Checkbox, Col, FormGroup, ControlLabel,FormControl, Button, ButtonToolbar } from 'react-bootstrap';

class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	email: '',
    	password: '',
    };
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
		console.log(this.props);
    event.preventDefault();
    this.props.router.push('/home');
	}

	render(){
    return (
      <div>
        <Form horizontal onSubmit={this.handleLogin}>
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

			    <FormGroup>
			      <Col smOffset={2} sm={10}>
			        <Checkbox>Remember me</Checkbox>
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={2} sm={10}>
			        <ButtonToolbar>
				      	<Button bsStyle="primary" type="submit" bsSize="large" >Log In</Button>
    					</ButtonToolbar>
			      </Col>
			    </FormGroup>
			  </Form>
      </div>
    )
  }
}


export default Login;