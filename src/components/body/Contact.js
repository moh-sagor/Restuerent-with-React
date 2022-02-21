import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';


class Contact extends Component {

    handleSubmit = values => {
        console.log(values);
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send Us Your Feedback </h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={3}>First Name </Label>
                                <Col md={9}>
                                    <Control.text
                                        model=".firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={3}>Last Name </Label>
                                <Col md={9}>
                                    <Control.text
                                        model=".lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={3}>Phone Number </Label>
                                <Col md={9}>
                                    <Control.text
                                        model=".telnum"
                                        name="telnum"
                                        placeholder="Mobile Number"
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={3}>Email </Label>
                                <Col md={9}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 3 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 3 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"


                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={3}>Message </Label>
                                <Col md={9}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        rows="12"
                                        className="form-control"

                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{ size: 9, offset: 3 }}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;