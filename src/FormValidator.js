import React, { Component } from 'react';
import './FormValidator.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Calculator from './Calculator.js'



  class FormValidator extends Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {
            homePrice: "",
            downPayment: "",
            loanTerm: "",
            interestRate: "",
            // isValid: false,
            formErrors: {
                homePriceError:'',
                downPaymentError:'',
                loanTermError:'',
                interestRateError:'',
            },
        }
        
        this.initialState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    
    handleSubmit(e){
        e.preventDefault();
        const isValid = this.validate(this.state);
        if(isValid){
            // this.setState({isValid: true});
            console.log(this.state);
            console.log(`Welcome, ${this.state.name}.  You have logged in successfully.`)
            this.setState(this.initialState)
        }else{
            console.log('invalid input')
        }
        
    }

    handleChange(e){
        const {name, value} = e.target

        let formErrors = {...this.state.formErrors}
        
        console.log(name);
        console.log(value)

        // switch(name){

        //     case 'name':
        //         if(value){
        //             formErrors.nameError = ''
        //             console.log('in nameValidator+')
        //             break;
        //         }else{
        //             formErrors.nameError = 'You must enter a name'
        //             console.log('in nameValidator-')
        //             break;
        //         }
        //     case 'email':
        //         if(emailRegex.test(value)){
        //             formErrors.emailError = '';
        //             console.log('in emailValidator+')
        //             break;
        //         }else{
        //             formErrors.emailError = 'Please enter a valid email'; 
        //             console.log('in emailValidator-')
        //             break;
        //         }

        //     case 'password':
        //         console.log(`password length: ${value.length}`)
        //         if(value.length>3){
        //             formErrors.passwordError = '';
        //             console.log('in passwordValidator+')
        //             break;
        //         }else{
        //             formErrors.passwordError = 'Password must be longer than 3 characters';
        //             console.log('in passwordValidator-')
        //             break;
        //         }
        //     default:
        //         break;
        // }

        
        this.setState({
            [name]:value,
            formErrors,
        }, console.log(this.state));


    }



    validate({ formErrors, ...rest }){


        let valid = true;

        Object.values(formErrors).forEach(val => {
          val.length > 0 && (valid = false);
        });
      
        Object.values(rest).forEach(val => {
          val === '' && (valid = false);
        });
      
        return valid;

    }

    render(){

        const {formErrors} = this.state
        // const welcomeMsg = <div>Welcome, {this.state.name}. You have logged in successfully!</div>

        return(
            <Container className="wrapper" fluid={true}>
                <Container className="form-wrapper form-wrapper-width">
                    <Row>
                        <Col>
                            <form className="m-4" onSubmit={this.handleSubmit} noValidate >
                                <h3>Mortgage Calculator</h3>
                                <div >
                                    {/* <label htmlFor="Home Price">Home Price: </label> */}
                                    <input
                                        className={formErrors.homePriceError.length > 0 ? "error" : null}
                                        type="text"
                                        name="homePrice"
                                        placeholder="$ Home price"
                                        value={this.state.homePrice}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div >
                                    {/* <label htmlFor="Down Payment">Down Payment: </label> */}
                                    <input
                                        className={formErrors.downPaymentError.length > 0 ? "error" : null}
                                        type="text"
                                        name="downPayment"
                                        placeholder="$ Down Payment"
                                        value={this.state.downPayment}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='errorMsg'>{this.state.formErrors.downPaymentError}</div>
                                <div> 
                                    {/* <label htmlFor="Loan Term">Loan Term: </label> */}
                                    <input
                                        className={formErrors.loanTermError.length > 0 ? "error" : null}
                                        type="text"
                                        name="loanTerm"
                                        placeholder="Loan Term (yrs.)"
                                        value={this.state.loanTerm}
                                        onChange={this.handleChange}

                                    />
                                </div>
                                <div className='errorMsg'>{this.state.formErrors.loanTermError}</div>
                                <div>
                                    {/* <label htmlFor="interestRate">Interest Rate: </label> */}
                                    <input
                                        className={formErrors.interestRateError.length > 0 ? "error" : null}
                                        type="text"
                                        name="interestRate"
                                        placeholder="Interest Rate (%)"
                                        value={this.state.interestRate}
                                        onChange={this.handleChange}

                                    />
                                </div>
                                <div className='errorMsg'>{this.state.formErrors.interestRateError}</div>
                                <div>
                                    <Button className='btnSubmit' type="submit">Submit</Button>
                                </div>
                                <a href="/"> <small>Don't have an account? Sign up</small></a>
                            </form>
                            {/* {this.state.isValid ? welcomeMsg : ""} */}
                        </Col>
                    </Row>
                </Container>
                <Calculator data={this.state.homePrice}></Calculator>
            </Container>
        );
    }
}

export default FormValidator