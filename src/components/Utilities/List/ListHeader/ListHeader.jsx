/** @format */

//IMPORT MODULES
import React from "react";
import "./ListHeader.scss";

//IMPORT COMPONENTS
import Searchbar from "../../Searchbar/Searchbar";

const ListHeader = ({ title, itemType }) => {
	return (
		<>
			<div className="header-container">
				<div className="list__header">
					<h1 className="list__title">{title}</h1>
					<div className="list__header-actions">
						<Searchbar />
						<div className="list__add-button">+ Add New {itemType}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListHeader;
