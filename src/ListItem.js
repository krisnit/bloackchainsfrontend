import React from "react";
import "./ListItem.css";
import PropTypes from "prop-types";

const darkColors = [
	"Black",
	"DarkBlue",
	"Indigo",
	"MidnightBlue",
	"Navy",
	"RebeccaPurple",
	"Maroon",
	"DarkGreen",
	"DarkRed",
	"DarkSlateGrey",
	"DarkSlateGray",
	"Purple",
	"Brown",
	"DarkMagenta",
	"DarkSlateBlue",
	"SaddleBrown",
	"Blue",
];

const ListItem = ({ item, changeText, searchText, hideListFn }) => {
	return (
		<div
			className="colors"
			onKeyUp={(event) => {
				if (event.keyCode === 13) {
					changeText(event, item);
					hideListFn();
				}
			}}
			tabIndex={0}
			style={{
				background: `${item}`,
				color: `${darkColors.includes(item) ? "white" : "black"}`,
			}}
		>
			<b>{item.substring(0, searchText.length)}</b>

			{item.substring(searchText.length)}
		</div>
	);
};

ListItem.propTypes = {
	searchText: PropTypes.string,
	changeText: PropTypes.func,
	item: PropTypes.string,
	hideListFn: PropTypes.func,
};
export default ListItem;
