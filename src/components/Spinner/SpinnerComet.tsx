import React from "react";
import "./SpinnerComet.css";

const SpinnerComet = () => {
	return (
		<div className="loader">
			<div className="face">
				<div className="circle"></div>
			</div>
			<div className="face">
				<div className="circle"></div>
			</div>
		</div>
	);
};

export default SpinnerComet;
