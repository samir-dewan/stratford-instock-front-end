/** @format */

//IMPORT MODULES
import React from "react";

//IMPORT COMPONENTS
import Searchbar from "../../Searchbar/Searchbar";

const ListHeader = ({ title, type }) => {
	return (
		<>
			<div className="list__header">
				<h1 className="list__title">{title}</h1>
				<Searchbar />
				<div className="list__add-button">+ Add New {type}</div>
			</div>
		</>
	);
};

export default ListHeader;
