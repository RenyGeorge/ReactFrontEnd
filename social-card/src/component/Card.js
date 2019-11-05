import React from "react";

const Card = props => (
	<div >
        <h2 style={{textAlign: "left", marginLeft: "5px"}}>Card Preview</h2>
		<div className="card__info">
	 {	
	  	<p>
	 		<h3> { props.fullName === "" ? "Your Name" : props.fullName}</h3>
		</p>
	 }
	 { 	
		<p>	 	
	 		<h5>{ props.department === "" ? "Department" : props.department}</h5>
		</p>
	 	
	 }
	 { 		
	 	<p>
		 	<span className="valueQuote"> { props.quote  === "" ? "Quote" : props.quote} </span>
		 </p>
	 	
	 }
	
	 </div>
	</div>
);

export default Card;