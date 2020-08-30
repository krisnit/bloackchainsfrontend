import React from "react";
import ListItems from "./ListItems";
import InputItem from "./InputItem";
import PropTypes from "prop-types";

const Typeahead = ({ list }) => {
	let [searchText, setSearchText] = React.useState("");
	let [showList, setShowList] = React.useState(true);
	let focusInput = React.useRef();
	let clickOutside = React.useRef();

	//fn to store the search text in state
	const changeText = (event, value) => {
		let val = value || event.target.value;
		setSearchText(val);
		setShowList(true);
	};

	// fn to hide the list
	let hideListFn = () => {
		setShowList(false);
		focusInput.current.focus();
	};

	//fn to list to esc key event
	const escKeyPress = React.useCallback((event) => {
		if (event.keyCode === 27) {
			hideListFn();
		}
	}, []);

	//fn to check wthr mouse is clicked outside and if yes - close the list
	const clickedOutside = React.useCallback((event) => {
		if (clickOutside.current && !clickOutside.current.contains(event.target)) {
			setShowList(false);
		}
	}, []);

	// set the esc key listening at document level
	React.useEffect(() => {
		document.addEventListener("keydown", escKeyPress, false);
		document.addEventListener("mousedown", clickedOutside, false);

		return () => {
			document.removeEventListener("keydown", escKeyPress, false);
			document.removeEventListener("mousedown", clickedOutside, false);
		};
	}, []);

	return (
		<div
			style={{ display: "flex", flexDirection: "column" }}
			ref={clickOutside}
		>
			<InputItem
				changeText={changeText}
				searchText={searchText}
				hideListFn={hideListFn}
				ref={focusInput}
			/>
			{showList && (
				<ListItems
					list={list}
					searchText={searchText}
					changeText={changeText}
					hideListFn={hideListFn}
				/>
			)}
		</div>
	);
};

Typeahead.propTypes = {
	list: PropTypes.array,
};

export default Typeahead;
