import React, { Component } from 'react';
import './Calculator.css';
import { Container, Row, Col } from 'react-bootstrap';



  class Calculator extends Component{
    
    
    
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    
    
    render(){

        return(
            <Container className="wrapper" fluid={true}>
                <Container className="form-wrapper form-wrapper-width">
                    <Row>
                        <Col>
                            <form className="m-4" noValidate >
                                <h3>Summary</h3>
                                <div >
                                    Home Price: {this.props.data}
                                </div>
                                <div >
                                    text here
                                </div>
                                <div> 
                                    text here
                                </div>
                                <div>
                                    text here
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Calculator