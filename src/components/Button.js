import React from "react";

const Button = ({ buttonDisplayName, clickHandler }) => {
	return (
		<button
			id="text"
			className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
			onClick={clickHandler}
		>
			{buttonDisplayName}
		</button>
	);
};

export default Button;
