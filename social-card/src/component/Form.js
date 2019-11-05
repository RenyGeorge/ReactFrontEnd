import React from "react";

const Form = props => (
	<form onSubmit={props.handleSubmit}>
        <h2 style={{textAlign: "left", marginLeft: "5px"}}>Entry Form</h2>
        { 
	 	props.error && <p className="error">{ props.error }</p>  
         }
        <p>
                <label>Full Name</label> 
                <input type="text" name="fullName" 
                placeholder="Full Name" 
                value={props.fullName} 
                onChange={props.handleChange}/>
        </p>
        <p>
                <label>Department</label> 
                <input type="text" name="department" 
                placeholder="Department"
                value={props.department} 
                onChange={props.handleChange}/>
        </p>
        <p>
        <label>Quote</label> 
        <textarea name="quote" placeholder="Quote"
        value={props.quote} 
        onChange={props.handleChange}/>
        </p>

        <p>
                <label><input type="checkbox" name="selectTheme" 
                checked={props.selectTheme}        
                onChange={props.handleChange}/>
                Use Dark Theme</label>
        </p>
        <p>
                <button>Next</button>
        </p>
	</form>
);

export default Form;