import React, { Component } from 'react';
import './Calculator.css';
import { Container, Row, Col } from 'react-bootstrap';
import accounting from 'accounting-js'

let money = accounting.format;



  class Calculator extends Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {
            // test: this.props.data
        }
    }
    
    
    render(){


        return(
                <Container className="form-wrapper form-wrapper-width">
                    <Row>
                        <Col>
                            <form className="m-4" noValidate >
                                <h3>Summary</h3>
                                <div >
                                    Monthly Payment: { this.props.data.payment ? money(this.props.data.payment) : this.props.data.payment }
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default Calculator