import React, { Component } from 'react';
import './Calculator.css';
import { Container, Row, Col } from 'react-bootstrap';
import accounting from 'accounting-js'

let money = accounting.format;



  class Calculator extends Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    
    render(){


        return(
                <Container className="form-wrapper-calc form-wrapper-width">
                    <Row>
                        <Col>
                            <form className="m-4" noValidate >
                                <h3>Your Payment</h3>
                                <div >
                                    Principal + Interest: { this.props.data.payment ? money(this.props.data.payment) : null }
                                </div>
                                <div >
                                    Taxes: { this.props.data.monthlyPropTax ? money(this.props.data.monthlyPropTax) : null }
                                </div>
                                <div >
                                    Insurance: { this.props.data.monthlyInsurance ? money(this.props.data.monthlyInsurance) : null }
                                </div>
                                <div >
                                    HOA: { this.props.data.monthlyHoa ? money(this.props.data.monthlyHoa) : null }
                                </div>
                                <div className='payment' >
                                    Est. Monthly Payment: <b> { this.props.data.totalPayment ? money(this.props.data.totalPayment) : null } </b>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default Calculator