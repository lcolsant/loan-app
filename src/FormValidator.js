import React, { Component } from 'react';
import './FormValidator.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Calculator from './Calculator.js'
import accounting from 'accounting-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'


let money = accounting.format;

const numRegex = new RegExp(
    /^(\d+)+(\.?\d*)?$/
  
);
const intRegex = new RegExp(
    /^[0-9]*$/
  
);


  class FormValidator extends Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {
            homePrice: "",
            downPayment: "",
            loanTerm: "",
            interestRate: "",
            payment: null,
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
        this.reset = this.reset.bind(this);
    }
    
    
    calcResult(){
        const {homePrice, downPayment, loanTerm, interestRate, payment} = this.state
        console.log(this.state);
        let principal = parseInt(homePrice) - parseInt(downPayment);
        let num = (  (parseFloat(interestRate) / 100) / 12 ) * principal;
        let denom1 = (1+  (  (parseFloat(interestRate)/100) / 12))
        let denom2 = -(parseInt(loanTerm)*12)  
        let denom3 = Math.pow(denom1,denom2)
        let denom = 1- denom3;
        let monthly_payment = num / denom;

        console.log(`monthly payment:  ${money(monthly_payment)}`)

        this.setState({payment:monthly_payment});

        return payment

    }
    
    handleSubmit(e){
        e.preventDefault();
        const isValid = this.validate(this.state);
        if(isValid){
            console.log(this.state);
            this.calcResult();
        }else{
            console.log('invalid input')
        }
        
    }

    handleChange(e){
        const {name, value} = e.target

        let formErrors = {...this.state.formErrors}
        
        console.log(name);
        console.log(value)


        switch(name){

            case 'homePrice':
                if(numRegex.test(value)){
                    
                    formErrors.homePriceError = ''
                    console.log('in homePriceValidator+')
                    break;
                }else{

                    formErrors.homePriceError = 'Please enter a valid number'
                    console.log('in homePriceValidator-')
                    break;
                }
            case 'downPayment':
                if(numRegex.test(value)){
                    
                    formErrors.downPaymentError = ''
                    console.log('in downPaymentValidator+')
                    break;
                }else{

                    formErrors.downPaymentError = 'Please enter a valid number'
                    console.log('in downPaymentValidator-')
                    break;
                }
            case 'loanTerm':
                if(intRegex.test(value)){
                    
                    formErrors.loanTermError = ''
                    console.log('in loanTermValidator+')
                    break;
                }else{

                    formErrors.loanTermError = 'Please enter an integer'
                    console.log('in loanTermValidator-')
                    break;
                }
            case 'interestRate':
                if(numRegex.test(value)){
                    
                    formErrors.interestRateError = ''
                    console.log('in interestRateValidator+')
                    break;
                }else{

                    formErrors.interestRateError = 'Please enter a valid number'
                    console.log('in interestRateValidator-')
                    break;
                }


            default:
                break;
        }

        
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

    reset(){
        this.setState(this.initialState)
    }

    render(){

        const {formErrors} = this.state

        return(
                <div>
                    <Container className="form-wrapper form-wrapper-width">
                        <Row>
                            <Col>
                                <form className="m-4" onSubmit={this.handleSubmit} noValidate >
                                    <div className="faCalculator">
                                        <FontAwesomeIcon icon={faCalculator}  />
                                    </div>
                                    <h3>Mortgage Calculator</h3>
                                    <div >
                                        {/* <label htmlFor="Home Price">Home Price: </label> */}
                                        <input
                                            className={formErrors.homePriceError.length > 0 ? "error" : null}
                                            type="text"
                                            name="homePrice"
                                            placeholder="Home price ($)"
                                            value={this.state.homePrice}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    {/* <div className='errorMsg'>{this.state.formErrors.homePriceError}</div> */}
                                    <div >
                                        {/* <label htmlFor="Down Payment">Down Payment: </label> */}
                                        <input
                                            className={formErrors.downPaymentError.length > 0 ? "error" : null}
                                            type="text"
                                            name="downPayment"
                                            placeholder="Down Payment ($)"
                                            value={this.state.downPayment}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    {/* <div className='errorMsg'>{this.state.formErrors.downPaymentError}</div> */}
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
                                    {/* <div className='errorMsg'>{this.state.formErrors.loanTermError}</div> */}
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
                                    {/* <div className='errorMsg'>{this.state.formErrors.interestRateError}</div> */}
                                    <div>
                                        <Button className='btnSubmit' type="submit">Submit</Button>
                                        <Button className='btnSubmit' type="submit" onClick={()=>this.reset()}>Reset</Button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                    <Calculator data={this.state}></Calculator>
                </div>
        );
    }
}

export default FormValidator