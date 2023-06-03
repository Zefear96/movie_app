import React from "react";

const SpinnerDoubleThin = () => {
	return (
		<div className="h-screen ">
			<div className="flex justify-center items-center h-full">
				<div className="w-16 h-16 border-4 border-orange-600 border-double rounded-full animate-spin border-b-0 border-l-0 "></div>
			</div>
		</div>
	);
};

export default SpinnerDoubleThin;
