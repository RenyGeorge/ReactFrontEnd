import React from "react";
import Form from "./component/Form"
import Card from "./component/Card"
import {ThemeProvider} from "styled-components"
import { GlobalStyles } from './component/global';
import {lightTheme,darkTheme} from './component/Theme'

import "react-bootstrap/dist/react-bootstrap.min.js"
import "./App.css"

class App extends React.Component{
  state = {
    fullName: "",
    department: "",
    quote: "",   
    error: "",
    selectTheme: false,
    theme: "light"
  }

  validate =() =>{
    let error = "";
    if(this.state.fullName === "" 
  	  || this.state.department === "" 
      || this.state.quote === "" )
      {
        error = "Before continuing please fill all values"
      }
      if(error){
        this.setState({error});
        return false;
      }
      else{
        this.setState({error});
      }
      return true;
  }
  handleChange = (event) => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked }) : this.setState({[name]: value})             
     if(type === "checkbox")
     {
       this.toggleThemChange(checked);
     }
  }
  toggleThemChange = (checked) =>{
    const theme = (checked === true) ? "dark": "light";
    this.setState({theme});  
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if(!isValid)
      return false;
  }
render(){     
    return(
      <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-7 form-container">
              <Form
              fullName={this.state.fullName} 
              department={this.state.department}
              quote={this.state.quote} 
              selectTheme={this.state.selectTheme}
              error={this.state.error}
              handleChange={this.handleChange} 
              handleSubmit ={this.handleSubmit}/>
            </div>
          <div className="col-xs-5 card-container">
            <ThemeProvider theme={this.state.theme === "light" ? lightTheme : darkTheme}>   
            <GlobalStyles></GlobalStyles>             
            <Card 
            fullName={this.state.fullName} 
            department={this.state.department}
            quote={this.state.quote}            
            error={this.state.error}/>
            </ThemeProvider>
          </div>
        </div>
        </div>
        </div>
        </div>
      )
    }
}

export default App;