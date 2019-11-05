import React from "react";

const Form = props => (
	<form onSubmit={props.handleSubmit}>
        <h2 style={{textAlign: "left", marginLeft: "5px"}}>Entry Form</h2>
        { 
	 	props.error && <p className="error">{ props.error }</p>  
	 }
        <label>Full Name</label> <input type="text" name="fullName" placeholder="Full Name" 
        value={props.fullName} 
        onChange={props.handleChange}/><br/>
        <label>Department</label> <input type="text" name="department" placeholder="Department"
        value={props.department} 
        onChange={props.handleChange}/><br/>

        <label>Quote</label> <textarea name="quote" placeholder="Quote"
        value={props.quote} 
        onChange={props.handleChange}/><br/>

        <label><input type="checkbox" name="selectTheme" 
        checked={props.selectTheme}        
        onChange={props.handleChange}/>
        Use Dark Theme</label>
        <br/>
        <button>Next</button><br/>
	</form>
);

export default Form;