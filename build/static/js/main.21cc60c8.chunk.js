(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(39)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),o=t.n(l),s=(t(30),t(31),t(19)),i=t(9),c=t(20),m=t(10),h=t(11),u=t(13),d=t(12),p=t(4),E=t(14),b=(t(32),t(40)),y=t(41),g=t(42),v=t(43),f=(t(33),t(21)),P=t.n(f).a.format,w=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={},t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{className:"form-wrapper-calc form-wrapper-width"},r.a.createElement(y.a,null,r.a.createElement(g.a,null,r.a.createElement("form",{className:"m-4",noValidate:!0},r.a.createElement("h3",null,"Your Payment"),r.a.createElement("div",null,"Principal + Interest: ",this.props.data.payment?P(this.props.data.payment):null),r.a.createElement("div",null,"Taxes: ",this.props.data.monthlyPropTax?P(this.props.data.monthlyPropTax):null),r.a.createElement("div",null,"Insurance: ",this.props.data.monthlyInsurance?P(this.props.data.monthlyInsurance):null),r.a.createElement("div",null,"HOA: ",this.props.data.monthlyHoa?P(this.props.data.monthlyHoa):null),r.a.createElement("div",{className:"payment"},"Est. Monthly Payment: ",r.a.createElement("b",null," ",this.props.data.totalPayment?P(this.props.data.totalPayment):null," "))))))}}]),a}(n.Component),T=t(23),x=t(24),k=new RegExp(/^(\d+)+(\.?\d*)?$/),C=new RegExp(/^[0-9]*$/),O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={homePrice:"",downPayment:"",loanTerm:"",interestRate:"",propTax:"",monthlyPropTax:"",insurance:"",monthlyInsurance:"",hoa:"",monthlyHoa:"",payment:null,totalPayment:null,submitted:!1,formErrors:{homePriceError:"",downPaymentError:"",loanTermError:"",interestRateError:"",propTaxError:"",insuranceError:"",hoaError:""}},t.initialState=t.state,t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.validate=t.validate.bind(Object(p.a)(t)),t.reset=t.reset.bind(Object(p.a)(t)),t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"calcResult",value:function(){var e=this.state,a=e.homePrice,t=e.downPayment,n=e.loanTerm,r=e.interestRate,l=e.payment,o=e.propTax,s=e.insurance,i=e.hoa,c=parseInt(a)-parseInt(t),m=parseFloat(r)/100/12*c,h=1+parseFloat(r)/100/12,u=-12*parseInt(n),d=m/(1-Math.pow(h,u)),p=parseFloat(o)/12,E=parseFloat(s)/12,b=parseFloat(i),y=d+p+E+b;return this.setState({payment:d,monthlyPropTax:p,monthlyInsurance:E,monthlyHoa:b,totalPayment:y}),l}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.validate(this.state)?(this.setState({submitted:!0},console.log("submitted?: ".concat(this.state.submitted))),console.log(this.state),this.calcResult()):console.log("invalid input")}},{key:"handleChange",value:function(e){var a,t=e.target,n=t.name,r=t.value,l=Object(c.a)({},this.state.formErrors);switch(console.log(n),console.log(r),n){case"homePrice":if(k.test(r)){l.homePriceError="",console.log("in homePriceValidator+");break}l.homePriceError="Please enter a valid number",console.log("in homePriceValidator-");break;case"downPayment":if(k.test(r)){l.downPaymentError="",console.log("in downPaymentValidator+");break}l.downPaymentError="Please enter a valid number",console.log("in downPaymentValidator-");break;case"loanTerm":if(C.test(r)){l.loanTermError="",console.log("in loanTermValidator+");break}l.loanTermError="Please enter an integer",console.log("in loanTermValidator-");break;case"interestRate":if(k.test(r)){l.interestRateError="",console.log("in interestRateValidator+");break}l.interestRateError="Please enter a valid number",console.log("in interestRateValidator-");break;case"propTax":if(k.test(r)){console.log("in propTaxValidator+"),l.propTaxError="";break}l.propTaxError="Please enter a valid number",console.log("in propTaxValidator-");break;case"insurance":if(k.test(r)){console.log("in insuranceValidator+"),l.insuranceError="";break}l.insuranceError="Please enter a valid number",console.log("in insuranceValidator-");break;case"hoa":if(k.test(r)){console.log("in HOAValidator+"),l.hoaError="";break}l.hoaError="Please enter a valid number",console.log("in hoaValidator-")}this.setState((a={},Object(i.a)(a,n,r),Object(i.a)(a,"formErrors",l),a),console.log(this.state))}},{key:"validate",value:function(e){var a=e.formErrors,t=(Object(s.a)(e,["formErrors"]),!0);return Object.values(a).forEach(function(e){e.length>0&&(t=!1)}),t}},{key:"reset",value:function(){this.setState(this.initialState),console.log("submitted: ".concat(this.state.submitted))}},{key:"render",value:function(){var e=this,a=this.state.formErrors;return r.a.createElement("div",{className:"wrapper-outer"},r.a.createElement(b.a,{className:"form-wrapper form-wrapper-width"},r.a.createElement(y.a,null,r.a.createElement(g.a,null,r.a.createElement("form",{className:"m-4",onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"faCalculator"},r.a.createElement(T.a,{icon:x.a})),r.a.createElement("h3",null,"Mortgage Calculator"),r.a.createElement("div",null,r.a.createElement("input",{className:a.homePriceError.length>0?"error":null,type:"text",name:"homePrice",placeholder:"Home price ($)",value:this.state.homePrice,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{className:a.downPaymentError.length>0?"error":null,type:"text",name:"downPayment",placeholder:"Down Payment ($)",value:this.state.downPayment,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{className:a.loanTermError.length>0?"error":null,type:"text",name:"loanTerm",placeholder:"Loan Term (yrs.)",value:this.state.loanTerm,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{className:a.interestRateError.length>0?"error":null,type:"text",name:"interestRate",placeholder:"Interest Rate (%)",value:this.state.interestRate,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{className:a.propTaxError.length>0?"error":null,type:"text",name:"propTax",placeholder:"$ Property Tax /year",value:this.state.propTax,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{className:a.insuranceError.length>0?"error":null,type:"text",name:"insurance",placeholder:"$ Insurance /year",value:this.state.insurance,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{className:a.hoaError.length>0?"error":null,type:"text",name:"hoa",placeholder:"$ HOA dues /mo",value:this.state.hoa,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement(v.a,{className:"btnSubmit",type:"submit"},"Submit"),r.a.createElement(v.a,{className:"btnSubmit",type:"submit",onClick:function(){return e.reset()}},"Reset")))))),this.state.submitted&&r.a.createElement(w,{data:this.state}))}}]),a}(n.Component);var j=function(){return r.a.createElement(b.a,{className:"wrapper",fluid:!0},r.a.createElement("div",{className:"App"},r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.21cc60c8.chunk.js.map