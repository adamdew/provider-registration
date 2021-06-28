import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from 'formik';

const validate = values => {

  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } 

  if (!values.lastName) {
    errors.lastName = 'Required';
  } 

  if (!values.phone) {
    errors.phone = 'Required';
  } 

  if (!values.email) {
    errors.email = 'Required';
  } 

  if (!values.npiNumber) {
    errors.npiNumber = 'Required';
  } else if(!/^\d+$/.test(values.npiNumber)){
    errors.npiNumber = 'Must only contain numeric values';
  }

  if (!values.address1) {
    errors.address1 = 'Required';
  } 

  if (!values.city) {
    errors.city = 'Required';
  }  

  if (!values.state) {
    errors.state = 'Required';
  } 

  if (!values.zip) {
    errors.zip = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.zip)) {
    errors.zip = 'Must only contain numeric values';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const RegisterForm = () => {
    
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        npiNumber: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        phone: '',
        email: ''
      },
      validate,
      onSubmit: values => {
        //usually I would send results to a backend here, I like to use an axio wrapper in my vue apps
        alert(JSON.stringify(values, null, 2));
      },
    });
    

    return (
      <Form className="provider-reg-form" onSubmit={formik.handleSubmit}>
        <h3>Availity Provider Registration</h3>
        <hr/>
      <Row lg="2" md="2" sm="1" xs="1">
        <Col>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName" 
              onChange={formik.handleChange}
              value={formik.values.firstName}/>
              <p className="validation-error">{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}</p>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" 
              onChange={formik.handleChange}
              value={formik.values.lastName}/>
              <p className="validation-error">{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}</p>
          </FormGroup>
        </Col>
      </Row>
      <Row lg="2" md="2" sm="1" xs="1">
        <Col>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="text" name="phone" id="phone" 
              onChange={formik.handleChange}
              value={formik.values.phone}/>
              <p className="validation-error">{formik.errors.phone ? <div>{formik.errors.phone}</div> : null}</p>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email"
              onChange={formik.handleChange}
              value={formik.values.email}/>
              <p className="validation-error">{formik.errors.email ? <div>{formik.errors.email}</div> : null}</p>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="npiNumber">NPI Number</Label>
        <Input type="text" name="npiNumber" id="npiNumber"  
              onChange={formik.handleChange}
              value={formik.values.npiNumber}/>
              <p className="validation-error">{formik.errors.npiNumber ? <div>{formik.errors.npiNumber}</div> : null}</p>

      </FormGroup>
      <FormGroup>
        <Label for="address1">Address 1</Label>
        <Input type="text" name="address1" id="address1"  
              onChange={formik.handleChange}
              value={formik.values.address1}/>
              <p className="validation-error">{formik.errors.address1 ? <div>{formik.errors.address1}</div> : null}</p>

      </FormGroup>
      <FormGroup>
        <Label for="address2">Address 2</Label>
        <Input type="text" name="address2" id="address2"   
              onChange={formik.handleChange}
              value={formik.values.address2}/>
      </FormGroup>
        <Row lg="3" md="3" sm="1" xs="1">
        <Col>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city"   
              onChange={formik.handleChange}
              value={formik.values.city}/>
              <p className="validation-error">{formik.errors.city ? <div>{formik.errors.city}</div> : null}</p>
          </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label for="state">State</Label>
            <Input type="select" name="state" id="state"  
              onChange={formik.handleChange}
              value={formik.values.state}>
            <option value="AL">Alabama</option>
	          <option value="AK">Alaska</option>
	          <option value="AZ">Arizona</option>
	          <option value="AR">Arkansas</option>
	          <option value="CA">California</option>
	          <option value="CO">Colorado</option>
	          <option value="CT">Connecticut</option>
	          <option value="DE">Delaware</option>
            <option value="">...</option>
        </Input>
        <p className="validation-error">{formik.errors.state ? <div>{formik.errors.state}</div> : null}</p>
      </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="zip">Zip/Postal Code</Label>
            <Input type="text" name="zip" id="zip"   
              onChange={formik.handleChange}
              value={formik.values.zip}/>
              <p className="validation-error">{formik.errors.zip ? <div>{formik.errors.zip}</div> : null}</p>
          </FormGroup>  
        </Col>
      </Row>
        <hr></hr>
        <Button color="primary" id="final-submit">Register</Button>
      </Form>
    )
    
}

export default RegisterForm;