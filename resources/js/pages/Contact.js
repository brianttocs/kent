import React, { Component } from 'react';
import { Banner } from '../components/Banner';

import { Form, Col, Button } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>

                <Banner pageName='Contact' linkName='Contact' />

                <section className="contact_area section_gap_bottom pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="contact_info">
                                    <div className="info_item">
                                        <i className="lnr lnr-home"></i>
                                        <h6>AAA street 27</h6>
                                        <p>AAAAAAA Country</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-phone-handset"></i>
                                        <h6><a href="/">(+371) 1231 2312</a></h6>
                                        <p>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-envelope"></i>
                                        <h6><a href="/">support@kentaurs.com</a></h6>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <Form className="row contact_form" action="POST" netlify-honeypot="bot-field" data-netlify="true" id="contact_form" >
                                    <div className="col-md-12">
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control placeholder="Your Name" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridAddress1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control placeholder="1234 Main St" />
                                        </Form.Group>

                                        <Form.Group controlId="formGridAddress2">
                                            <Form.Label>Address 2</Form.Label>
                                            <Form.Control placeholder="Apartment, studio, or floor" />
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group id="formGridTextarea">
                                            <Form.Label>Mesaage</Form.Label>
                                            <Form.Control as="textarea" rows="3" placeholder="Your Message" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                            </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
