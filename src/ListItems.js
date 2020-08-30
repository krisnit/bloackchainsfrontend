import React from "react";
import ListItem from "./ListItem";
import "./ListItems.css";
import PropTypes from "prop-types";

const ListItems = ({ list, searchText, changeText, hideListFn }) => {
	let strippedText = searchText.replace("\\", "\\\\");
	let reg = new RegExp(`^${strippedText}`, "i");

	const filteredList = list.filter((item) => reg.test(item));

	return (
		<div className="listItems">
			{searchText &&
				filteredList.map((item) => (
					<ListItem
						item={item}
						changeText={changeText}
						searchText={searchText}
						hideListFn={hideListFn}
						key={item}
					/>
				))}
		</div>
	);
};

ListItems.propTypes = {
	searchText: PropTypes.string,
	changeText: PropTypes.func,
	list: PropTypes.array,
	hideListFn: PropTypes.func,
};

export default ListItems;
