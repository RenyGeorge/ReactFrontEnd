import React from "react";

const Card = props => (
	<div >
        <h2 style={{textAlign: "left", marginLeft: "5px"}}>Card Preview</h2>
		<div className="card__info">
	
			<h2> { props.fullName === "" ? "Your Name" : props.fullName}</h2>
			<h4>{ props.department === "" ? "Department" : props.department}</h4>
			<p>
				<span className="valueQuote"> { props.quote  === "" ? "Quote" : props.quote} </span>
			</p>
		</div>
	</div>
);

export default Card;