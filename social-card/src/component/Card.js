import React from "react";

const Card = props => (
	<div className="card__info">
        <h1>Card Preview</h1>
	 {	
	 	props.fullName &&<p className="key"> 
	 		<span className="value"> { props.fullName }</span>
	 	</p> 
	 }
	 { 	
	 	props.department && <p className="key"> 
	 		<span className="value" > { props.department }	</span>
	 	</p> 
	 }
	 { 	
	 	props.quote && <p className="key"> 
	 		<span className="value"> { props.quote } </span>
	 	</p> 
	 }
	 
	 { 
	 	props.error && <p>{ props.error }</p>  
	 }
	</div>
);

export default Card;