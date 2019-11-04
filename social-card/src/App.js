import React from "react";
import Form from "./component/Form"
import Card from "./component/Card"
import "react-bootstrap/dist/react-bootstrap.min.js"
import "./App.css"
class App extends React.Component{
  state = {
    fullName: "",
    department: "",
    quote: "",   
    error: "",
    selectTheme:false,
    theme: 'light'
  }
  handleChange = (event) =>{
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked }) : this.setState({ [name]: value}) 
    const theme = (this.state.selectTheme === true) ?'dark': 'light';
    this.setState({theme});
    document.documentElement.setAttribute("data-theme",theme);
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
                  handleChange={this.handleChange} />
                </div>
              <div className="col-xs-5 card-container">
                <Card 
                fullName={this.state.fullName} 
                department={this.state.department}
                quote={this.state.quote}            
                error={this.state.error}/>
              </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default App;