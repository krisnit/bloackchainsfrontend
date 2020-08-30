import React from "react";
import "./InputItem.css";
import PropTypes from "prop-types";

// search bar
const InputItem = React.forwardRef((props, ref) => {
	let { changeText, searchText } = props;
	return (
		<div className="searchbar">
			<input
				ref={ref}
				type="text"
				onChange={changeText}
				value={searchText}
				placeholder="Search here..."
			/>
		</div>
	);
});

InputItem.propTypes = {
	searchText: PropTypes.string,
	changeText: PropTypes.func,
};

export default InputItem;
